import React from "react";
import { Users } from "lucide-react";

const sampleCommunities = [
  {
    name: "Nairobi Food Rescue Hub",
    impact: "2,430 meals served",
    members: 421,
  },
  {
    name: "Youth Skills & Empowerment Group",
    impact: "80 youth mentored",
    members: 157,
  },
  {
    name: "Women Agribusiness Collective",
    impact: "12 micro-loans issued",
    members: 63,
  },
];

const TrendingCommunities = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
        <Users size={20} />
        Trending Communities
      </h3>

      <div className="mt-4 space-y-4">
        {sampleCommunities.map((c, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition"
          >
            <p className="font-semibold text-gray-800">{c.name}</p>
            <p className="text-sm text-gray-500">{c.impact}</p>
            <p className="text-xs text-gray-400 mt-1">
              {c.members} active members
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCommunities;
