/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/newline-after-import */
const express = require('express');
const path = require('path');
const compression = require('compression');
const pkg = require(path.resolve(process.cwd(), 'package.json'));
const proxy = require('http-proxy-middleware');
const fs = require('fs');
const addMockEndpoints = require('./mockEndpoints.js');

// Production middlewares
const addProxyMiddlewares = (app) => {
  app.use('/admin/api', proxy({ target: 'http://localhost:9000', changeOrigin: true }));
};

const addSharedMiddlewares = (app) => {
  app.get('*', (req, res) => {
    const index = path.join(__dirname, '../../../src/index.dev.ejs');

    fs.readFile(index, (err) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.render(index, {
          withNg: process.env.WITH_NG === 'true',
          isProd: process.env.NODE_ENV === 'production',
          microapp: {
            lang: 'en-us',
            cdnPath: 'http://localhost:3000/',
          },
          gcaConfig: JSON.stringify({
            i18n: {
              primaryLocale: 'en-us',
            },
          }),
          buildVersion: '0',
          Mixpanel: {
            script: '',
          },
        });
      }
    });
  });
}

// Dev middleware
const addDevMiddlewares = (app, webpackConfig) => {
  const webpack = require('webpack');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    silent: true,
    stats: 'errors-only',
  });

  app.use(webpackDevMiddleware);
  app.use(webpackHotMiddleware(compiler));

  if (pkg.dllPlugin) {
    app.get(/\.dll\.js$/, (req, res) => {
      const filename = req.path.replace(/^\//, '');
      res.sendFile(path.join(process.cwd(), pkg.dllPlugin.path, filename));
    });
  }
};

// Production middlewares
const addProdMiddlewares = (app, options) => {
  const publicPath = options.publicPath || '/';
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'dist');

  app.use(compression());
  app.use(publicPath, express.static(outputPath));
};

/**
 * Front-end middleware
 */
module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  app.set('view engine', 'ejs');

  addMockEndpoints(app);
  addProxyMiddlewares(app);

  if (isProd) {
    addProdMiddlewares(app, options);
  } else {
    const webpackConfig = require('../../webpack/webpack.dev.babel');
    addDevMiddlewares(app, webpackConfig);
  }

  addSharedMiddlewares(app);

  return app;
};
