import React from "react";
import { AlertCircle, Phone, BellRing } from "lucide-react";

const Emergency = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold flex items-center gap-2 text-red-600 mb-4">
        <AlertCircle size={20}/> Emergency Support
      </h1>

      <div className="bg-black-50 border border-black-200 p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold">⚠ Urgent Issue? We’re Here.</h2>
        <p className="mt-2">
          Use the emergency hotline for platform outages, safety concerns, or urgent FoodAid/FinGrow issues.
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3">
            <Phone size={22} className="text-red-600"/>
            <p className="text-lg font-semibold">+254 746 416 715</p>
          </div>

          <button className="bg-red-600 text-white px-4 py-3 rounded-xl w-full flex items-center justify-center gap-2">
            <BellRing size={20}/> Send Emergency Alert
          </button>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
