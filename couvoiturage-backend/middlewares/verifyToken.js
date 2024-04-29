require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1]; // Extract token from 'Bearer token'

    try {
      const data = jwt.verify(token, process.env.CLE); // Verify the token synchronously

      req.user = data; // Add user information to the request object
      next(); // Continue to the next middleware or route handler
    } catch (err) {
      res.sendStatus(403); // Token is invalid or expired
    }
  } else {
    res.sendStatus(401); // No token provided
  }
};

module.exports = verifyToken;
