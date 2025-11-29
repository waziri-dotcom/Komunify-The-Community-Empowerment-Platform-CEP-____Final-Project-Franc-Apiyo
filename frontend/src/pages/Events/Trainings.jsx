import React from "react";

export default function Trainings() {
  const trainingList = [
    { title: "Financial Literacy Training", level: "Beginner" },
    { title: "Community Project Management", level: "Advanced" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Trainings</h1>

      <div className="space-y-4">
        {trainingList.map((t, i) => (
          <div
            key={i}
            className="p-5 bg-white rounded-xl shadow hover:shadow-md transition"
          >
            <h2 className="font-semibold">{t.title}</h2>
            <p className="text-gray-500 mt-1">Level: {t.level}</p>
            <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg">
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
