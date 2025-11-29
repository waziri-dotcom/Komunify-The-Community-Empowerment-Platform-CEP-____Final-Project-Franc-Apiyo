import React from "react";
import Card from "../../components/ui/Card";
import { Phone, CreditCard, Globe } from "lucide-react";

export default function Donate() {
  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold">Make a Donation</h1>

      {/* Kenya Donations Section */}
      <Card className="p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Kenya Donations</h2>
        <div className="space-y-3">
          <p className="font-semibold">Mpesa – Buy Goods</p>
          <p className="text-gray-600">Till Number: <span className="font-bold">9890075</span></p>

          <p className="font-semibold mt-4">Mpesa Paybill</p>
          <p className="text-gray-600">
            Paybill: <span className="font-bold">247247</span>  
            <br />Account: <span className="font-bold">705002</span>
          </p>
        </div>
      </Card>

      {/* International Donations */}
      <Card className="p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">International Donations</h2>
        <p className="text-gray-600">Bank: Diamond Trust Bank (DTB)</p>
        <p className="text-gray-600">Account: <span className="font-bold">5732829003 (USD)</span></p>
        <p className="text-gray-600">SWIFT Code: <span className="font-bold">DTKEKENA</span></p>
      </Card>

      <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow">
        Confirm Donation
      </button>
    </div>
  );
}
