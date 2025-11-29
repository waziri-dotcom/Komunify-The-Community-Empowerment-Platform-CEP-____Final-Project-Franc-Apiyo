import React, { useState } from "react";
import Card from "../../components/ui/Card";
import ProgressCircle from "../../components/Charts/ProgressCircle";
import { Calculator, AlertTriangle, CheckCircle } from "lucide-react";

const RiskProfile = () => {
  const [score, setScore] = useState(null);

  const generateScore = () => {
    const value = Math.floor(Math.random() * 100);
    setScore(value);
  };

  const status =
    score < 40
      ? { label: "High Risk", color: "text-red-600" }
      : score < 70
      ? { label: "Medium Risk", color: "text-yellow-600" }
      : { label: "Low Risk", color: "text-green-700" };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-green-700">Risk Profiling</h2>
      <p className="text-gray-600">AI-powered assessment based on your application behaviour.</p>

      <Card className="mt-6 p-6 flex flex-col items-center">
        <ProgressCircle progress={score || 0} size={140} />

        {score !== null && (
          <div className="mt-4 text-center">
            <p className={`text-xl font-bold ${status.color}`}>{status.label}</p>
            <p className="text-gray-600 text-sm">Your financial standing is calculated from your history.</p>
          </div>
        )}

        <button
          onClick={generateScore}
          className="mt-6 bg-green-700 text-white px-6 py-2 rounded-lg"
        >
          Generate Risk Score
        </button>
      </Card>
    </div>
  );
};

export default RiskProfile;
