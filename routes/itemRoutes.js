const express = require("express");
const {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
} = require("../controller/itemController.js");
const { getAuthMiddleware } = require("../middleware/authMiddleware.js");
const { isAdmin } = require("../middleware/roleMiddleware.js");

const router = express.Router();

router.post("/item", getAuthMiddleware, isAdmin, createItem);
router.get("/item", getAuthMiddleware, getItems);
router.get("/item/:id", getAuthMiddleware, getItemById);
router.put("/item/:id", getAuthMiddleware, isAdmin, updateItem);
router.delete("/item/:id", getAuthMiddleware, isAdmin, deleteItem);

module.exports = router;
