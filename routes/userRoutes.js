const express = require("express");
const {
  registerUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");
const { getAuthMiddleware } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/user", registerUser);
router.get("/user", getAuthMiddleware, isAdmin, getAllUsers);
router.get("/user/:id", getAuthMiddleware, isAdmin, getSingleUser);
router.put("/user/:id", getAuthMiddleware, isAdmin, updateUser);
router.delete("/user/:id", getAuthMiddleware, isAdmin, deleteUser);

module.exports = router;
