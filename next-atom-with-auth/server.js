const express = require("express");
const session = require("express-session");
const next = require("next");
const dotenv = require("dotenv");

const dev = process.env.NODE_ENV !== "production";
// set target to folder src
const app = next({ dir: "./src", dev });

// routing
const appRoutes = require("./src/routes");

const handler = appRoutes.getRequestHandler(app);

// logger
const logger = require("./src/services/logger");

dotenv.config();

const { APP_ORIGIN, APP_PORT: PORT } = process.env;

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(
      session({
        name: "next-atom-boilerplate",
        secret: "hii saru saru o",
        resave: true,
        saveUninitialized: true,
        cookie: {
          httpOnly: true,
          maxAge: 7 * 24 * 3600 * 1000
        }
      })
    );

    server.use("/static/", express.static("public"));
    server.use("/public/", express.static("public"));

    server.use(handler).listen(PORT, err => {
      if (err) throw err;

      logger.info(`> Ready on ${APP_ORIGIN}`);
    });
  })
  .catch(error => {
    logger.error(error.stack);
    process.exit(1);
  });
