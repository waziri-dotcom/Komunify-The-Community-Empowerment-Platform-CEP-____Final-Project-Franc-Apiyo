import React, { useState } from "react";
import { Ticket, PlusCircle } from "lucide-react";

const TicketPage = () => {
  const [form, setForm] = useState({ subject: "", category: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const submitTicket = () => {
    if (!form.subject || !form.message) return;
    setSubmitted(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold flex items-center gap-2 mb-4">
        <Ticket size={20}/> Submit a Support Ticket
      </h1>

      {!submitted ? (
        <div className="space-y-4 bg-white p-6 rounded-xl shadow">

          <input
            className="border p-2 rounded-xl w-full"
            placeholder="Subject"
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />

          <select
            className="border p-2 rounded-xl w-full"
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            <option>Select Category</option>
            <option>FoodAid Issue</option>
            <option>FinGrow Loan Support</option>
            <option>Wallet & Payments</option>
            <option>Account & Login</option>
            <option>Platform Bug</option>
          </select>

          <textarea
            className="border p-2 rounded-xl w-full h-40"
            placeholder="Describe your issue..."
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button
            onClick={submitTicket}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl"
          >
            <PlusCircle className="inline-block mr-2" size={18}/> Submit Ticket
          </button>
        </div>
      ) : (
        <div className="p-6 bg-green-100 rounded-xl">
          <h2 className="font-semibold text-green-700 text-lg">Ticket Submitted Successfully!</h2>
          <p className="mt-2">Our support team will respond within 5–15 minutes.</p>
        </div>
      )}
    </div>
  );
};

export default TicketPage;
