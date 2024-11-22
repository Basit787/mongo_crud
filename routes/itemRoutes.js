const express = require("express");
import {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
} from "../controller/itemController.js";

const router = express.Router();

router.post("/", createItem);
router.get("/", getItems);
router.get("/:id", getItemById);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
