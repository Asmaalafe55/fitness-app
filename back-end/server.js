// init an express app
const express = require("express");
const app = express();
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./router");
const { errorConverter, errorHandler } = require("./middleware/error");
const helmet = require("helmet");
const mongoose = require("mongoose");
const db = mongoose.connection;
const fs = require("fs");
const http = require("http");
const expressWinston = require("express-winston");
const { transports, format } = require("winston");
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const cluster = process.env.CLUSTER;

app.use(helmet());

http.createServer(app).listen(process.env.PORT || 4000, function () {
  console.log("Listening on port http://localhost:4000 !");
});

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
  })
);

const errmessage = format.printf(({ level, meta, timestamp }) => {
  return ` ${timestamp} ${level}: ${meta.message}`;
});

app.use(
  expressWinston.errorLogger({
    transports: [new transports.Console({ level: "error" })],
    format: format.combine(format.json(), format.timestamp(), errmessage),
  })
);

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/?retryWrites=true&w=majority`
);

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(cookieParser());
app.use(express.json({ limit: "10MB" }));
app.use(express.urlencoded({ limit: "10MB", extended: false }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Limit each IP to 1000 requests per windowMs
});

app.use(limiter);
app.use("/", router);
app.use(errorConverter);
app.use(errorHandler);
