import React from "react";

const ImpactStats = ({ small = false }) => {
  const stats = [
    { label: "Tons of food saved", value: "2.1t" },
    { label: "Loans issued", value: "57" },
    { label: "Households reached", value: "312" },
  ];

  if (small) {
    // compact widget for hero area
    return (
      <div className="p-3 rounded-lg bg-green-50 border border-green-100 text-center min-w-[160px]">
        <p className="text-xs text-gray-500">Impact snapshot</p>
        <p className="text-lg font-semibold text-green-800">10 projects • 312 families</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h4 className="text-sm font-semibold text-gray-800">Impact Overview</h4>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {stats.map((s, i) => (
          <div key={i} className="p-3 bg-gray-50 rounded-lg border border-gray-100 text-center">
            <p className="text-xs text-gray-500">{s.label}</p>
            <p className="mt-1 font-semibold text-gray-800">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStats;
