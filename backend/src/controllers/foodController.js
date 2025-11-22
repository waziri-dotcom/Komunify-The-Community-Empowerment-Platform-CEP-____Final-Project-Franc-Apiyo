// src/controllers/foodController.js
const FoodListing = require('../models/FoodListing');
const User = require('../models/User');
const { emitToUser, emitToRoom } = require('../sockets'); // helper exports from sockets/index.js

// Create new food listing (donor)
async function createListing(req, res, next) {
  try {
    const donor = req.user; // set by auth middleware
    const payload = { ...req.body, donor: donor._id };
    const created = await FoodListing.create(payload);
    res.status(201).json(created);
  } catch (err) { next(err); }
}

// List nearby available listings (geo query)
async function listNearby(req, res, next) {
  try {
    const { lat, lng, radius = 5000, limit = 50 } = req.query;
    if (!lat || !lng) {
      // return all available if no geo provided
      const items = await FoodListing.find({ status: 'available' }).limit(parseInt(limit));
      return res.json(items);
    }

    const items = await FoodListing.find({
      location: {
        $near: {
          $geometry: { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
          $maxDistance: parseInt(radius)
        }
      },
      status: 'available'
    }).limit(parseInt(limit));

    res.json(items);
  } catch (err) { next(err); }
}

// Basic matching: assign recipient to a listing
async function matchToRecipient(req, res, next) {
  try {
    const { listingId } = req.params;
    const { recipientId } = req.body; // verified recipient id
    if (!recipientId) return res.status(400).json({ error: 'recipientId required' });

    const listing = await FoodListing.findById(listingId);
    if (!listing) return res.status(404).json({ error: 'Listing not found' });
    if (listing.status !== 'available') return res.status(400).json({ error: 'Listing not available' });

    listing.matchedRecipient = recipientId;
    listing.status = 'matched';
    await listing.save();

    // Notify donor and recipient via sockets (if connected)
    emitToUser(listing.donor.toString(), 'foodMatched', { listing });
    emitToUser(recipientId.toString(), 'foodMatched', { listing });

    res.json(listing);
  } catch (err) { next(err); }
}

// Confirm pickup / delivery
async function confirmDelivery(req, res, next) {
  try {
    const { listingId } = req.params;
    const listing = await FoodListing.findById(listingId);
    if (!listing) return res.status(404).json({ error: 'Listing not found' });

    listing.status = 'delivered';
    await listing.save();

    // update donor/recipient stats (simple)
    const donor = await User.findById(listing.donor);
    const recipient = await User.findById(listing.matchedRecipient);
    if (donor) donor.impact.tonnesSaved += (listing.quantity || 0);
    if (recipient) recipient.impact.tonnesSaved += (listing.quantity || 0);
    await donor?.save();
    await recipient?.save();

    emitToUser(listing.donor.toString(), 'foodDelivered', { listing });
    emitToUser(listing.matchedRecipient?.toString(), 'foodDelivered', { listing });

    res.json({ ok: true, listing });
  } catch (err) { next(err); }
}

module.exports = {
  createListing,
  listNearby,
  matchToRecipient,
  confirmDelivery
};
