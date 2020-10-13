const path = require("path");
const withPlugins = require("next-compose-plugins");

const withCSS = require("@zeit/next-css");
const withLess = require("@zeit/next-less");
const withSass = require("@zeit/next-sass");
const withOffline = require("next-offline");

const publicConfig = require("./config/public.config");

const config = {
  distDir: "build",
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  webpack: (config, opts) => {
    // to make we are able to import without any '..'
    config.resolve.modules.push(path.resolve("./src/"));

    return config;
  },
  publicRuntimeConfig: publicConfig
};

module.exports = withPlugins(
  [withCSS, withLess, withSass, withOffline],
  config
);
