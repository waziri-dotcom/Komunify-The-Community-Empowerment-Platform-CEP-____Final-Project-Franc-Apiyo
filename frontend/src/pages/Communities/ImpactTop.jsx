import React from "react";
import Card from "../../components/ui/Card";

const topCommunities = [
  { name: "Kibera Food Angels", impact: 98, projects: 24 },
  { name: "Mathare Digital Hub", impact: 95, projects: 17 },
  { name: "Eastlands Women Group", impact: 93, projects: 21 },
];

export default function ImpactTop() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Top Impact Communities</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {topCommunities.map((c, i) => (
          <Card
            key={i}
            className="p-6 rounded-xl shadow hover:shadow-xl border-t-4 border-green-600"
          >
            <h2 className="text-xl font-semibold">{c.name}</h2>
            <p className="text-sm text-gray-500 mt-1">
              {c.projects} active projects
            </p>
            <div className="mt-4">
              <p className="text-xs">Impact Score</p>
              <div className="bg-gray-200 h-2 rounded-lg">
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
