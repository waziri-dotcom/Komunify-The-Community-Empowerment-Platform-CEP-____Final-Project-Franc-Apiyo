import React from "react";

export default function PastEvents() {
  const past = [
    { title: "Food Aid Outreach", date: "Oct 2024" },
    { title: "Youth Empowerment Forum", date: "Sep 2024" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Past Events</h1>

      <div className="space-y-4">
        {past.map((p, i) => (
          <div
            key={i}
            className="p-5 bg-white rounded-xl shadow hover:shadow-md transition"
          >
            <h2 className="font-semibold">{p.title}</h2>
            <p className="text-gray-500 mt-1">{p.date}</p>
            <button className="mt-3 px-4 py-2 bg-gray-600 text-white rounded-lg">
              View Highlights
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
