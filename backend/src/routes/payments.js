const express = require("express");
const router = express.Router();
const mpesa = require("../services/mpesaService");

// Initiate STK Push
router.post("/stk", async (req, res) => {
  const { phone, amount } = req.body;
  try {
    const response = await mpesa.stkPush(phone, amount);
    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post("/callback", async (req, res) => {
  const data = await mpesa.handleCallback(req.body);
  console.log("M-Pesa Callback:", data);



  res.json({ status: "received" });
});

module.exports = router;
