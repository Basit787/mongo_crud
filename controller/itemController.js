const Item = require("../models/item");

// Create a new item
const createItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    const savedItem = await item.save();
    res.status(201).json({
      status: 201,
      message: "Item created successfully",
      data: savedItem,
    });
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
};

// Get all items
const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json({
      status: 200,
      message: "Items retrieved successfully",
      data: items.length ? items : "No data found",
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

// Get a single item by ID
const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ status: 404, message: "Item not found" });
    }
    res.status(200).json({
      status: 200,
      message: "Item retrieved successfully",
      data: item,
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

// Update an item by ID
const updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedItem) {
      return res.status(404).json({ status: 404, message: "Item not found" });
    }
    res.status(201).json({
      status: 201,
      message: "Item updated successfully",
      data: updatedItem,
    });
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
};

// Delete an item by ID
const deleteItem = async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ status: 404, message: "Item not found" });
    }
    res.status(200).json({ status: 200, message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
};
