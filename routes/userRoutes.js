const express = require("express");
const {
  registerUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");

const router = express.Router();

router.post("/user", registerUser);
router.get("/user", getAllUsers);
router.get("/user/:id", getSingleUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
