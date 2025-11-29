import React from "react";
import { CheckCircle } from "lucide-react";

const steps = [
  "Create your Komunify Account",
  "Complete Your Impact Profile",
  "Join or Start a Community",
  "Explore FoodAid Listings",
  "Set Up FinGrow Wallet",
  "Attend Your First Mentorship Session"
];

const Onboarding = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold flex items-center gap-2 mb-4">
        <CheckCircle size={20}/> User Onboarding Guide
      </h1>

      <div className="space-y-4">
        {steps.map((s, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow flex items-center gap-3">
            <div className="bg-blue-600 text-green w-10 h-10 flex items-center justify-center rounded-full">
              {i + 1}
            </div>
            <p className="font-medium">{s}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Onboarding;
