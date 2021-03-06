const jwt = require("jsonwebtoken"),
  JWT_SECRET = "THIS IZ A SUPER SEKRAT BIRO, DO NOT LEAK ITTT ;p";

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).json("No token, authorization denied!");
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json("Token is not valid");
  }
};

module.exports = auth;
