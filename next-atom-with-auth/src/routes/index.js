const routes = require("next-routes");

routes
  .add("home", "/", "index")
  .add("ayam", "/ayam", "ayam")
  .add("other-page", "/other", "other");

module.exports = routes;
