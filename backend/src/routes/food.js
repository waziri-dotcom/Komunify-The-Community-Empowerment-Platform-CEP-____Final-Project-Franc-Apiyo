// src/routes/food.js
const express = require('express');
const router = express.Router();
const { createListing, listNearby, matchToRecipient, confirmDelivery } = require('../controllers/foodController');
const { requireAuth } = require('../middleware/auth');

router.get('/', listNearby);
router.post('/', requireAuth, createListing);
router.post('/:listingId/match', requireAuth, matchToRecipient);
router.post('/:listingId/confirm-delivery', requireAuth, confirmDelivery);

module.exports = router;
