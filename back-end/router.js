const router = require("express").Router();
const authorizeMiddleware = require("./middleware/authorization");
const verifyToken = require("./middleware/verifyUser");

module.exports = router;
