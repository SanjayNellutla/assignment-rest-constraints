const { errorResponse } = require('.');
const jwt = require("jsonwebtoken");
const config = require('../config/config');

const verifyAuthorization = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, config.jwtSecret, (err, payload) => {
          if (err) {
              return res.sendStatus(403);
          }
          req.user = payload.user;
          next();
      });
  } else {
    errorResponse(req, res, 'Unauthorized Access', 401);
  }
};

module.exports = {
  verifyAuthorization,
};