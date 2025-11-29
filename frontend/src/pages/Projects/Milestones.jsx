import React from "react";
import { CheckCircle } from "lucide-react";

const Milestones = () => {
  const milestones = [
    { title: "Project Initiation", progress: 80 },
    { title: "Community Onboarding", progress: 45 },
    { title: "Pilot Launch", progress: 20 },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Milestones & Progress</h1>

      <div className="space-y-5">
        {milestones.map((m, index) => (
          <div key={index} className="p-5 bg-white rounded-xl shadow">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">{m.title}</h2>
              <CheckCircle className="text-green-600" />
            </div>

            <div className="mt-3 w-full bg-gray-200 rounded-full h-3">
              <div
                className="h-3 bg-blue-600 rounded-full"
                style={{ width: `${m.progress}%` }}
              ></div>
            </div>

            <p className="mt-2 text-sm text-gray-600">{m.progress}% completed</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milestones;
