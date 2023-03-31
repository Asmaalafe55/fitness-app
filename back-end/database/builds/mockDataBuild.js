const fs = require("fs");
const path = require("path");
const db = require("../connection");
// get the contents of our init.sql file
const mockDataPath = path.join(__dirname, "../data/mockData.sql");
const mockDataSQL = fs.readFileSync(mockDataPath, "utf-8");

// run the init.sql file on our database
db.query(mockDataSQL)
  .then(() => {
    console.log("Database built");
    db.end();
  })
  .catch(console.log);
