const jwt = require("jsonwebtoken");

const authorizeMiddleware = (tiers) => (req, res, next) => {
  const userToken = req.cookies.userToken;
  if (!userToken) {
    return res.status(403).send({ success: false });
  }

  jwt.verify(userToken, process.env.TOKEN_SECRET, (err, userDecodedToken) => {
    if (err) {
      return res.status(403).send({ success: false });
    }

    if (tiers.some((tier) => tier == userDecodedToken.access_tier)) {
      next();
    } else {
      res.status(403).send({ success: false });
    }
  });
};

module.exports = authorizeMiddleware;
