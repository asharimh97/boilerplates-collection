const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dir: "./src", dev });

const routes = require("./src/routes");
const handler = routes.getRequestHandler(app);

const server = express();

app.prepare().then(() => {
  server.use(handler).listen(8000, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:8000`);
  });
});
