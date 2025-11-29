import React from "react";

const sessions = [
  { id: 1, mentee: "Jane N.", topic: "Business Plan Basics", hours: 2, date: "2025-09-12" },
  { id: 2, mentee: "Simon K.", topic: "Budgeting", hours: 1, date: "2025-09-18" },
];

const MentorshipHours = () => {
  const totalHours = sessions.reduce((s, it) => s + it.hours, 0);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Mentorship Hours</h3>
        <div className="text-sm text-gray-500">Total: <span className="font-semibold text-gray-800">{totalHours} hrs</span></div>
      </div>

      <ul className="mt-4 space-y-3">
        {sessions.map(s => (
          <li key={s.id} className="p-3 rounded-lg bg-gray-50 border border-gray-100 flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">{s.mentee}</p>
              <p className="text-sm text-gray-500">{s.topic}</p>
            </div>
            <div className="text-sm text-gray-600">{s.hours} hrs • {new Date(s.date).toLocaleDateString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorshipHours;
