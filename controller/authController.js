const User = require("../models/user");
const { CreateToken, ComparePassword } = require("../utils/helpers");

const getAuth = async (req, res) => {
  const { email, password } = req.body;
  try {
    const getUser = await User.findOne({ email });
    if (!getUser) return res.status(404).json({ message: "Invalid Email" });

    const validPassword = await ComparePassword(password, getUser.password);
    if (!validPassword)
      return res.status(401).json({ message: "Invalid Password" });

    const payload = {
      id: getUser.id,
      user: getUser.name,
      email: getUser.email,
      role: getUser.role,
    };

    const token = CreateToken(payload);

    if (!token) return res.status(404).json({ message: "Token not found" });

    return res.status(200).json({ status: 200, data: getUser, token });
  } catch (error) {
    return req.status(500).json({ message: "Internal Server error" });
  }
};

module.exports = { getAuth };
