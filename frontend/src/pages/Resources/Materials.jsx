import React from "react";

const materials = [
  { id: 1, title: "Community Mobilization Guide", type: "PDF", size: "1.2MB" },
  { id: 2, title: "Surplus Food Handling Checklist", type: "PDF", size: "320KB" },
];

const Materials = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Materials</h3>
        <span className="text-sm text-gray-500">{materials.length} items</span>
      </div>

      <ul className="mt-4 space-y-3">
        {materials.map(m => (
          <li key={m.id} className="p-3 rounded-lg bg-gray-50 border border-gray-100 flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">{m.title}</p>
              <p className="text-sm text-gray-500">{m.type} • {m.size}</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded-md text-sm border border-gray-200">Preview</button>
              <button className="px-3 py-1 rounded-md text-sm bg-emerald-600 text-white">Download</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Materials;
