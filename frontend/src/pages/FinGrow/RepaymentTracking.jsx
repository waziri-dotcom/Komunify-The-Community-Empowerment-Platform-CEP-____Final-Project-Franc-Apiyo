import React from "react";
import Card from "../../components/ui/Card";
import BarChart from "../../components/Charts/BarChart";
import { CheckCircle, Clock } from "lucide-react";

const RepaymentTracking = () => {
  const schedule = [
    { month: "Jan", paid: 2000 },
    { month: "Feb", paid: 2000 },
    { month: "Mar", paid: 0 },
  ];

  const totalPaid = schedule.reduce((a, b) => a + b.paid, 0);
  const target = 6000;

  return (
    <div className="p-6">
      <h2 className="text-2xl text-green-700 font-semibold">Repayment Tracking</h2>
      <p className="text-gray-600">Monitor your loan obligations and progress.</p>

      <Card className="p-6 mt-6">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Paid</p>
            <p className="text-2xl font-bold text-green-700">
              KES {totalPaid.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Remaining</p>
            <p className="text-2xl font-bold text-gray-700">
              KES {(target - totalPaid).toLocaleString()}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <BarChart data={schedule} xKey="month" yKey="paid" />
        </div>

        <ul className="mt-6 space-y-2">
          {schedule.map((s, i) => (
            <li
              key={i}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
            >
              <span>{s.month} Payment</span>
              {s.paid > 0 ? (
                <CheckCircle className="text-green-700" />
              ) : (
                <Clock className="text-yellow-600" />
              )}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default RepaymentTracking;
