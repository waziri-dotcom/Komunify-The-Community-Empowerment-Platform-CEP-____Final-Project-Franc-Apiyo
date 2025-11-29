const axios = require("axios");

const stkPush = async ({ phoneNumber, amount, accountReference, transactionDesc }) => {
  const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"; 
  const token = process.env.MPESA_BEARER_TOKEN;
  const shortCode = process.env.MPESA_SHORTCODE; 
  const passkey = process.env.MPESA_PASSKEY;
  const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);
  const password = Buffer.from(shortCode + passkey + timestamp).toString("base64");

  const payload = {
    BusinessShortCode: shortCode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: phoneNumber,
    PartyB: shortCode,
    PhoneNumber: phoneNumber,
    CallBackURL: process.env.MPESA_CALLBACK_URL,
    AccountReference: accountReference,
    TransactionDesc: transactionDesc,
  };

  const response = await axios.post(url, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

module.exports = { stkPush };
