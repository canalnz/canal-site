const withCss = require('@zeit/next-css');

module.exports = withCss({
  cssModules: true,
  exportTrailingSlash: true
});
