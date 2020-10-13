// public runtime configuration for next js app
require("dotenv").config();

module.exports = {
  APP_PORT: process.env.APP_PORT,
  APP_ORIGIN: process.env.APP_ORIGIN,
  API_URL: process.env.API_URL
};
