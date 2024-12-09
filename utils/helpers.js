const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

dotenv.config();

const HashedPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const ComparePassword = async (userPassword, hashPassword) => {
  return await bcrypt.compare(userPassword, hashPassword);
};
const SECRET_KEY = process.env.SECRET_KEY;

const CreateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
};

const VerifyToken = (token) => {
    return jwt.verify(token, SECRET_KEY);
};

module.exports = {
  HashedPassword,
  ComparePassword,
  CreateToken,
  VerifyToken,
};
