import React, { useState } from "react";
import { Wrench } from "lucide-react";

const steps = [
  "Check your internet connection.",
  "Try logging out and back in.",
  "Clear browser cache or app storage.",
  "Restart your device.",
  "Try again using a different network.",
];

const Troubleshooting = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold flex items-center gap-2 mb-4">
        <Wrench size={20}/> Troubleshooting Assistant
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold mb-2">Step {current + 1}</h2>
        <p className="mb-6">{steps[current]}</p>

        {current < steps.length - 1 ? (
          <button
            onClick={() => setCurrent(current + 1)}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl"
          >
            Next Step
          </button>
        ) : (
          <div>
            <p className="font-semibold text-green-700">Troubleshooting Completed!</p>
            <p>If the issue persists, open a ticket or chat with an agent.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Troubleshooting;
