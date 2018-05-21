/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');

module.exports = options => ({
  entry: options.entry,
  output: Object.assign(
    {
      // Compile into js/dist.js
      path: path.resolve(process.cwd(), 'dist'),
      publicPath: '/',
    },
    options.output
  ), // Merge with env dependent settings
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            query: options.babelQuery,
          },
          {
            loader: 'awesome-typescript-loader',
            query: {
              // Fixes issue with logs polluting stats: https://github.com/s-panferov/awesome-typescript-loader/issues/375
              silent: process.argv.indexOf('--json') !== -1,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            query: options.babelQuery,
          },
        ],
        exclude: /node_modules\/(?!gca)/,
      },
      {
        test: /\.(css|scss)$/,
        use: options.cssLoaders,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(mp4|webm)$/,
        use: ['url-loader?limit=10000'],
      },
    ],
  },
  plugins: options.plugins.concat([
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]),
  resolve: {
    modules: ['src', path.resolve(__dirname, '../../node_modules'), 'node_modules', 'internals/testing'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.react.js'],
    mainFields: ['browser', 'main', 'jsnext:main'],
    symlinks: false,
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
});
