import React from "react";

const tools = [
  { id: 1, name: "Volunteer Roster Template", desc: "Spreadsheet", linkText: "Download" },
  { id: 2, name: "Pickup Routing Checklist", desc: "Google Sheet template", linkText: "Open" },
];

const Tools = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800">Tools & Templates</h3>
      <div className="mt-4 space-y-3">
        {tools.map(t => (
          <div key={t.id} className="p-3 rounded-lg bg-gray-50 border border-gray-100 flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">{t.name}</p>
              <p className="text-sm text-gray-500">{t.desc}</p>
            </div>
            <button className="px-3 py-1 rounded-md border border-gray-200 text-sm">{t.linkText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
