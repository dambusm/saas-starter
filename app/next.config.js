const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withTM = require('next-transpile-modules')([
  '@saas-starter/data-lib',
]);
module.exports = withBundleAnalyzer(withTM({}));
