import React from "react";
import { Bell } from "lucide-react";

const sampleUpdates = [
  "New grant opportunities added for youth startups.",
  "10,000 meals distributed across 4 counties this week.",
  "Women Agribusiness Collective completed their 1st loan cycle.",
  "New mentorship partners onboarded into Komunify.",
];

const UpdatesFeed = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
      <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
        <Bell size={20} />
        Latest Updates
      </h3>

      <ul className="mt-4 space-y-4">
        {sampleUpdates.map((u, index) => (
          <li
            key={index}
            className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-gray-700 text-sm hover:bg-gray-100 transition"
          >
            {u}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpdatesFeed;
