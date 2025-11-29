// src/controllers/foodAid.controller.js
const asyncHandler = require("express-async-handler");
const FoodAid = require("../models/foodAid.model"); // Ensure this model exists

// Create a new Food Aid record
const createFoodAid = asyncHandler(async (req, res) => {
  const { beneficiaryName, location, amount, date } = req.body;

  if (!beneficiaryName || !location || !amount) {
    res.status(400);
    throw new Error("Beneficiary name, location, and amount are required");
  }

  const foodAid = await FoodAid.create({
    beneficiaryName,
    location,
    amount,
    date: date || new Date(),
  });

  res.status(201).json(foodAid);
});

// Get all Food Aid records
const getFoodAids = asyncHandler(async (req, res) => {
  const foodAids = await FoodAid.find().sort({ date: -1 });
  res.status(200).json(foodAids);
});

// Get a single Food Aid record by ID
const getFoodAidById = asyncHandler(async (req, res) => {
  const foodAid = await FoodAid.findById(req.params.id);
  if (!foodAid) {
    res.status(404);
    throw new Error("Food Aid record not found");
  }
  res.status(200).json(foodAid);
});

// Update a Food Aid record by ID
const updateFoodAid = asyncHandler(async (req, res) => {
  const foodAid = await FoodAid.findById(req.params.id);
  if (!foodAid) {
    res.status(404);
    throw new Error("Food Aid record not found");
  }

  Object.assign(foodAid, req.body);
  const updatedFoodAid = await foodAid.save();
  res.status(200).json(updatedFoodAid);
});

// Delete a Food Aid record by ID
const deleteFoodAid = asyncHandler(async (req, res) => {
  const foodAid = await FoodAid.findById(req.params.id);
  if (!foodAid) {
    res.status(404);
    throw new Error("Food Aid record not found");
  }

  await foodAid.remove();
  res.status(200).json({ message: "Food Aid record deleted successfully" });
});

module.exports = {
  createFoodAid,
  getFoodAids,       // Ensure this matches the routes import
  getFoodAidById,
  updateFoodAid,
  deleteFoodAid,
};
