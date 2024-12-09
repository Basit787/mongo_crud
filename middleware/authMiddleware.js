const { VerifyToken } = require("../utils/helpers");

const getAuthMiddleware = async (req, res, next) => {
  const headers = req.header("Authorization");
  if (!headers)
    return res.status(404).json({ message: "Headers not found!!!" });

  const token = headers.split(" ")[1];
  if (!token) return res.status(403).json({ message: "Token not found" });

  const verifiedUser = VerifyToken(token);
  if (!verifiedUser)
    return res.status(403).json({ message: "Failed to verify token" });

  req.user = verifiedUser;
  next();
};

module.exports = { getAuthMiddleware };
