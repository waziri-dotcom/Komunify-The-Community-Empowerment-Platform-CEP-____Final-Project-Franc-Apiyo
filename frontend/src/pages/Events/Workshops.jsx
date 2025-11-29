import React from "react";

export default function Workshops() {
  const workshops = [
    { title: "Digital Skills Workshop", date: "12 Jan 2025" },
    { title: "Community Data Training", date: "20 Jan 2025" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Workshops</h1>

      <div className="space-y-4">
        {workshops.map((w, index) => (
          <div
            key={index}
            className="p-5 rounded-xl bg-white shadow hover:shadow-md transition"
          >
            <h2 className="font-semibold">{w.title}</h2>
            <p className="text-gray-500 mt-1">{w.date}</p>
            <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg">
              Attend
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
