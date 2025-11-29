import React, { useState } from "react";
import { initiateSTKPush } from "../api/mpesa";

export default function DonationButton({ ticketId, user }) {
  const [amount, setAmount] = useState("");

  const handleDonate = async () => {
    if (!amount) return;
    try {
      await initiateSTKPush({
        ticketId,
        userId: user._id,
        phoneNumber: user.phoneNumber,
        amount: parseFloat(amount),
      });
      alert("STK Push initiated. Check your phone.");
      setAmount("");
    } catch (err) {
      alert(err.response?.data?.message || "Error initiating payment");
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDonate}>Donate via M-Pesa</button>
    </div>
  );
}
