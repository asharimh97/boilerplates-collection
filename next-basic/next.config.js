const withCss = require("@zeit/next-css");
const withOffline = require("next-offline");

const nextConfig = withOffline(
  withCss({
    distDir: "build",
    webpack: (config, options) => {
      // another webpack config goes here
      return config;
    }
  })
);

module.exports = nextConfig;
