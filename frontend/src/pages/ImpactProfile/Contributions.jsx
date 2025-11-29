import React from "react";

const contributions = [
  { title: "Food distributions coordinated", value: "3,640 meals" },
  { title: "Volunteer hours", value: "420 hrs" },
  { title: "Families supported", value: "312 households" },
];

const Contributions = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800">Contributions</h3>
      <p className="text-sm text-gray-500 mt-1">Impact highlights and recent activity</p>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {contributions.map((c, i) => (
          <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
            <p className="text-xs text-gray-500">{c.title}</p>
            <p className="mt-2 font-semibold text-gray-800">{c.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm">View Full Impact Report</button>
      </div>
    </div>
  );
};

export default Contributions;
