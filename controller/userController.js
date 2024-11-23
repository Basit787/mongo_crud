const User = require("../models/user");
const { HashedPassword } = require("../utils/helpers");

//create new user
const registerUser = async (req, res) => {
  try {
    const hashedPassword = await HashedPassword(req.body.password);
    const user = new User({
      ...req.body,
      password: hashedPassword,
    });
    const saveUser = await user.save();
    res.status(201).json({
      status: 201,
      message: "User register successfully",
      data: saveUser,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//get all user
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 200,
      message: "Successfully fetched all users",
      data: users.length ? users : "no users added",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get single user
const getSingleUser = async (req, res) => {
  try {
    const singleUser = await User.findById(req.params.id);
    if (!singleUser) {
      return res.status(404).json({ status: 404, message: "User not found" });
    }
    res.status(200).json({
      status: 200,
      message: "Successfully fetched user data",
      data: singleUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update user
const updateUser = async (req, res) => {
  try {
    const hashedPassword = await HashedPassword(req.body.password);
    const updateId = await User.findByIdAndUpdate(
      req.params.id,
      { ...req.body, password: hashedPassword },
      {
        new: true,
      }
    );
    if (!updateId) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(201).json({
      staus: 201,
      message: "User updated successfully",
      data: updateId,
    });   
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete user
const deleteUser = async (req, res) => {
  try {
    const deleteId = await User.findByIdAndDelete(req.params.id);
    if (!deleteId) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      status: 200,
      message: "User deleted succesfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
