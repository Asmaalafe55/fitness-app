const pg = require("pg");

require("dotenv").config();

const connectionString = process.env.DATABASE_URL;
const isDev = (process.env.NODE_ENV || "development") === "development";
pg.types.setTypeParser(1082, function (value) {
  return value;
});
const db = new pg.Pool({
  connectionString,
  ...(!isDev && { ssl: { rejectUnauthorized: false } }),
});

module.exports = db;
