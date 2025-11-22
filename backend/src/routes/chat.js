// src/routes/chat.js
const express = require('express');
const router = express.Router();
const { postMessage, getMessages } = require('../controllers/chatController');
const { requireAuth } = require('../middleware/auth');

router.get('/rooms/:room/messages', requireAuth, getMessages);
router.post('/rooms/:room/messages', requireAuth, postMessage);

module.exports = router;
