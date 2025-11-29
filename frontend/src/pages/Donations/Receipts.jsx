import React from "react";
import Card from "../../components/ui/Card";

const receipts = [
  { id: "RCPT-001", amount: 500, date: "12 Jan 2025" },
  { id: "RCPT-002", amount: 1500, date: "28 Jan 2025" },
];

export default function Receipts() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Donation Receipts</h1>

      <div className="space-y-4">
        {receipts.map((r, i) => (
          <Card key={i} className="p-4 rounded-xl shadow-md flex items-center justify-between">
            <div>
              <p className="font-semibold">{r.id}</p>
              <p className="text-gray-500 text-sm">{r.date}</p>
            </div>
            <p className="font-bold text-green-600">KES {r.amount}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
