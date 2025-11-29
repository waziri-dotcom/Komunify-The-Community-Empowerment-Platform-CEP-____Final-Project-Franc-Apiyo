import React from "react";
import { Users, Globe, Search } from "lucide-react";
import Card from "../../components/ui/Card";

const communities = [
  { name: "Nairobi Youth Empowerment", members: 842, region: "Nairobi", impact: 92 },
  { name: "Mombasa Food Rescue Squad", members: 521, region: "Coast", impact: 88 },
  { name: "Kisumu Green Projects", members: 609, region: "Nyanza", impact: 95 },
];

export default function CommunityList() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">All Communities</h1>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white shadow">
          <Search size={18} />
          <input
            placeholder="Search communities..."
            className="outline-none text-sm"
          />
        </div>
      </div>

      {/* List */}
      <div className="grid md:grid-cols-2 gap-6">
        {communities.map((c, i) => (
          <Card key={i} className="p-5 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{c.name}</h2>
            <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Users size={18} /> {c.members} Members
              </span>
              <span className="flex items-center gap-2">
                <Globe size={18} /> {c.region}
              </span>
            </div>
            <div className="mt-3">
              <p className="text-xs">Impact Score</p>
              <div className="h-2 bg-gray-200 rounded-lg">
                <div
                  className="h-full bg-green-600 rounded-lg"
                  style={{ width: `${c.impact}%` }}
                ></div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
