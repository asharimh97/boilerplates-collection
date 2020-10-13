const publicConfig = require("../../config/public.config");

module.exports = () => ({
  publicRuntimeConfig: {
    ...publicConfig
  }
});
