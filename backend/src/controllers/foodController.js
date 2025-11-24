const FoodListing = require('../models/FoodListing');
const logger = require('../utils/logger');

exports.createListing = async (req, res, next) => {
  try {
    const data = { ...req.body, donor: req.user._id };
    const listing = await FoodListing.create(data);
    res.status(201).json({ listing });
  } catch (err) {
    logger.error('Create listing error', err);
    next(err);
  }
};

exports.listAvailable = async (req, res, next) => {
  try {
    const listings = await FoodListing.find({ status: 'available' }).sort({ createdAt: -1 }).limit(50);
    res.json({ listings });
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const listing = await FoodListing.findById(req.params.id).populate('donor', 'name email');
    if (!listing) return res.status(404).json({ error: 'Listing not found' });
    res.json({ listing });
  } catch (err) {
    next(err);
  }
};
