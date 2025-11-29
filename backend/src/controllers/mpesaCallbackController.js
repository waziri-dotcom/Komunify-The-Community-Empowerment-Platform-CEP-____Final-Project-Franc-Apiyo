// src/controllers/mpesaCallbackController.js
const Donation = require("../models/donation.model");

// Receive MPESA STK Push callback
exports.mpesaCallback = async (req, res) => {
  try {
    const callbackData = req.body;

    // Example structure from Safaricom
    const resultCode =
      callbackData.Body?.stkCallback?.ResultCode ?? callbackData.ResultCode;
    const checkoutRequestID =
      callbackData.Body?.stkCallback?.CheckoutRequestID ??
      callbackData.CheckoutRequestID;

    // Find donation
    const donation = await Donation.findOne({ mpesaCheckoutRequestID: checkoutRequestID });
    if (!donation) {
      console.warn("Donation not found for callback", checkoutRequestID);
      return res.status(404).json({ message: "Donation not found" });
    }

    // Update donation status
    donation.status = resultCode === 0 ? "successful" : "failed";
    donation.mpesaCallback = callbackData;
    await donation.save();

    res.json({ message: "Callback processed" });
  } catch (err) {
    console.error("mpesaCallback error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
