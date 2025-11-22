const axios = require("axios");
const moment = require("moment");

const consumerKey = process.env.MPESA_CONSUMER_KEY;
const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
const shortcode = process.env.MPESA_SHORTCODE;
const passkey = process.env.MPESA_PASSKEY;
const callbackURL = process.env.MPESA_CALLBACK_URL;

const baseURL =
  process.env.MPESA_ENV === "live"
    ? "https://api.safaricom.co.ke"
    : "https://sandbox.safaricom.co.ke";

module.exports = {
  // Generate OAuth token
  getToken: async () => {
    const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64");

    const response = await axios.get(
      `${baseURL}/oauth/v1/generate?grant_type=client_credentials`,
      { headers: { Authorization: `Basic ${auth}` } }
    );

    return response.data.access_token;
  },

  // STK Push
  stkPush: async (phone, amount, accountRef = "Komunify") => {
    try {
      const token = await module.exports.getToken();

      const timestamp = moment().format("YYYYMMDDHHmmss");
      const password = Buffer.from(shortcode + passkey + timestamp).toString("base64");

      const payload = {
        BusinessShortCode: shortcode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phone,
        PartyB: shortcode,
        PhoneNumber: phone,
        CallBackURL: callbackURL,
        AccountReference: accountRef,
        TransactionDesc: "Komunify Payment"
      };

      const { data } = await axios.post(
        `${baseURL}/mpesa/stkpush/v1/processrequest`,
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      return data;

    } catch (err) {
      console.error("STK Error:", err.response?.data || err.message);
      throw new Error("Failed to initiate STK push");
    }
  },

  // Callback handler logic
  handleCallback: async (body) => {
    if (!body || !body.Body) return null;

    const callback = body.Body.stkCallback;
    const resultCode = callback.ResultCode;

    if (resultCode !== 0) {
      return {
        success: false,
        message: callback.ResultDesc,
      };
    }

    const metadata = callback.CallbackMetadata.Item.reduce((acc, i) => {
      acc[i.Name] = i.Value;
      return acc;
    }, {});

    return {
      success: true,
      amount: metadata.Amount,
      mpesaReceipt: metadata.MpesaReceiptNumber,
      phone: metadata.PhoneNumber,
      date: metadata.TransactionDate
    };
  }
};
