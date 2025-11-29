const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth.routes"));
router.use("/users", require("./user.routes"));
router.use("/donations", require("./donation.routes"));
router.use("/loans", require("./loan.routes"));
router.use("/events", require("./event.routes"));
router.use("/tickets", require("./ticket.routes"));
router.use("/communities", require("./community.routes"));
router.use("/food-aid", require("./foodAid.routes"));
router.use("/chat", require("./chat.routes"));
router.use("/notifications", require("./notification.routes"));

module.exports = router;
