const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');
const { authenticate } = require('../middleware/auth');

router.post('/', authenticate, foodController.createListing);
router.get('/', foodController.listAvailable);
router.get('/:id', foodController.getById);

module.exports = router;
