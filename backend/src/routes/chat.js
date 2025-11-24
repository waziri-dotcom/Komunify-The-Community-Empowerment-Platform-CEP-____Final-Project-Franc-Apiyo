const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const { authenticate } = require('../middleware/auth');

router.post('/send', authenticate, chatController.sendMessage);
router.get('/history', authenticate, chatController.history);

module.exports = router;
