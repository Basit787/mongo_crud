const bycrypt = require("bcrypt");

const HashedPassword = (password) => {
  return bycrypt.hash(password, 10);
};

module.exports = { HashedPassword };
