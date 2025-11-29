import React, { useState } from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { Wallet, Send, Loader2 } from "lucide-react";

const MpesaWallet = () => {
  const [balance, setBalance] = useState(1240);
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  const [loading, setLoading] = useState(false);

  const triggerSTK = () => {
    setLoading(true);
    setTimeout(() => {
      setBalance(balance + parseInt(amount));
      setLoading(false);
      alert("M-PESA STK Push sent to your phone.");
    }, 1500);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl text-green-700 font-semibold">M-PESA Wallet</h2>
      <p className="text-gray-600">Manage deposits, withdrawals and loan repayments.</p>

      <Card className="p-6 mt-6">
        <div className="flex items-center gap-3">
          <Wallet className="text-green-700" size={38} />
          <div>
            <p className="text-gray-500 text-sm">Wallet Balance</p>
            <p className="text-2xl font-bold text-green-700">KES {balance.toLocaleString()}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <input
            type="text"
            placeholder="Phone Number (07...)"
            className="border rounded-lg p-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="number"
            placeholder="Amount (KES)"
            className="border rounded-lg p-2"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <Button
            className="bg-green-700 text-white rounded-lg flex items-center justify-center gap-2"
            onClick={triggerSTK}
          >
            {loading ? <Loader2 className="animate-spin" /> : <Send size={16} />}
            Deposit
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default MpesaWallet;
