const express = require('express');
const router = express.Router();
const communityController = require('../controllers/communityController');
const { authenticate } = require('../middleware/auth');

router.post('/', authenticate, communityController.createCommunity);
router.get('/', communityController.list);

module.exports = router;
