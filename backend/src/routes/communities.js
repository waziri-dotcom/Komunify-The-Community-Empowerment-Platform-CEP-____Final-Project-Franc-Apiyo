// src/routes/communities.js
const express = require('express');
const router = express.Router();
const { listCommunities, createCommunity, joinCommunity } = require('../controllers/communityController');
const { requireAuth } = require('../middleware/auth');

router.get('/', listCommunities);
router.post('/', requireAuth, createCommunity);
router.post('/:id/join', requireAuth, joinCommunity);

module.exports = router;
