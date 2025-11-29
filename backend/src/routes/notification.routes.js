const express = require("express");
const router = express.Router();
const {
  getNotifications,
  markAsRead,
} = require("../controllers/notification.controller");

router.get("/user/:id", getNotifications);
router.post("/read/:id", markAsRead);

module.exports = router;
