const jwt = require("jsonwebtoken");
const User = require("../models/User"); 
require("dotenv").config({ path: "../config.env" });

const isAuthorized = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    console.log("No token provided");
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findByPk(decoded.id);

    if (!req.user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (req.user.isAdmin) {
      req.user.role = "admin";
    }

    next();
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = isAuthorized;
