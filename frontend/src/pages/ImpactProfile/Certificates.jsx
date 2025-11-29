import React from "react";

const certificates = [
  { id: 1, title: "Community Leadership Certificate", issuer: "Komunify Academy", date: "2024-11-01" },
  { id: 2, title: "Data for Good — Short Course", issuer: "Partners", date: "2025-03-15" },
];

const Certificates = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800">Certificates</h3>
      <p className="text-sm text-gray-500 mt-1">Verified achievements and badges</p>

      <div className="mt-4 space-y-3">
        {certificates.map(c => (
          <div key={c.id} className="p-3 rounded-lg bg-gray-50 border border-gray-100">
            <p className="font-semibold text-gray-800">{c.title}</p>
            <p className="text-sm text-gray-500">{c.issuer} • {new Date(c.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <button className="px-4 py-2 rounded-lg border border-amber-400 text-amber-700 text-sm">Download Certificates</button>
      </div>
    </div>
  );
};

export default Certificates;
