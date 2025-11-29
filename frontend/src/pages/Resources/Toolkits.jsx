import React from "react";

const toolkits = [
  { id: 1, title: "Community Outreach Toolkit", items: 8 },
  { id: 2, title: "Finance Starter Pack", items: 5 },
];

const Toolkits = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Toolkits</h3>
        <span className="text-sm text-gray-500">{toolkits.length} kits</span>
      </div>

      <div className="mt-4 space-y-3">
        {toolkits.map(t => (
          <div key={t.id} className="p-3 rounded-lg bg-gray-50 border border-gray-100 flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">{t.title}</p>
              <p className="text-sm text-gray-500">{t.items} items</p>
            </div>
            <button className="px-3 py-1 rounded-md border border-green-200 text-green-700 text-sm">Open Toolkit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolkits;
