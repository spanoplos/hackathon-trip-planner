const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');

module.exports = {
  loader: 'postcss-loader',
  options: {
    plugins: () => [
      postcssFocus(), // Add a :focus to every :hover

      cssnext({ // Allow future CSS features to be used, also auto-prefixes the CSS...
        browsers: ['last 2 versions', 'IE > 11'], // ...based on this browser list
      }),

      postcssReporter({ // Posts messages from plugins to the terminal
        clearMessages: true,
      }),
    ],
  },
};
