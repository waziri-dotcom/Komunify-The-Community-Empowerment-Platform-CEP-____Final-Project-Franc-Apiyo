import React, { useState } from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { CheckCircle, Loader2 } from "lucide-react";

const LoanApplication = () => {
  const [form, setForm] = useState({
    amount: "",
    purpose: "",
    duration: "",
    income: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitLoan = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-green-700">FinGrow – Loan Application</h2>
      <p className="text-gray-600 mt-1">
        Apply for a micro-loan tailored to empower your business growth.
      </p>

      <Card className="mt-6 p-6">
        {!submitted ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="text-sm text-gray-600">Loan Amount (KES)</label>
                <input
                  type="number"
                  name="amount"
                  value={form.amount}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                  placeholder="e.g. 20,000"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Loan Duration</label>
                <select
                  name="duration"
                  value={form.duration}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                >
                  <option>Select Duration</option>
                  <option>1 Month</option>
                  <option>2 Months</option>
                  <option>3 Months</option>
                </select>
              </div>

              <div className="col-span-2">
                <label className="text-sm text-gray-600">Business Purpose</label>
                <textarea
                  name="purpose"
                  value={form.purpose}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                  placeholder="Describe how this loan will help your business"
                />
              </div>

              <div className="col-span-2">
                <label className="text-sm text-gray-600">Monthly Income (KES)</label>
                <input
                  type="number"
                  name="income"
                  value={form.income}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>
            </div>

            <Button
              className="mt-4 bg-green-700 text-white px-6 py-2 rounded-lg"
              onClick={submitLoan}
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin" /> : "Submit Application"}
            </Button>
          </>
        ) : (
          <div className="flex flex-col items-center text-center py-10">
            <CheckCircle className="w-12 h-12 text-green-700" />
            <h3 className="text-xl font-semibold mt-4">Application Submitted</h3>
            <p className="text-gray-600">You will receive updates in your loan dashboard.</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default LoanApplication;
