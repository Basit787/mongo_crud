const express = require("express");
const {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
} = require("../controller/itemController.js");

const router = express.Router();

router.post("/item", createItem);
router.get("/item", getItems);
router.get("/item/:id", getItemById);
router.put("/item/:id", updateItem);
router.delete("/item/:id", deleteItem);

module.exports = router;
