const withCss = require("@zeit/next-css");
const withOffline = require("next-offline");

const publicConfig = require("./config/public.config");

const nextConfig = withOffline(
  withCss({
    distDir: "build",
    webpack: (config, options) => {
      // another webpack config goes here
      return config;
    },
    publicRuntimeConfig: publicConfig
  })
);

module.exports = nextConfig;
