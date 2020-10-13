const winston = require("winston");
const fs = require("fs");
const path = require("path");

const logDir = "logs";
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

const { createLogger, format, transports } = winston;
const { splat, colorize, combine, timestamp, printf } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [Level: ${level}]: ${message}`;
});

const logger = createLogger({
  level: "verbose",
  format: combine(timestamp(), logFormat),
  transports: [
    new transports.Console({ format: printf(({ message }) => message) }),
    new transports.File({
      filename: path.join(logDir, "errors.log"),
      level: "error"
    }),
    new transports.File({
      filename: path.join(logDir, "warns.log"),
      level: "warn"
    }),
    new transports.File({ filename: path.join(logDir, "combined.log") })
  ]
});

module.exports = logger;
