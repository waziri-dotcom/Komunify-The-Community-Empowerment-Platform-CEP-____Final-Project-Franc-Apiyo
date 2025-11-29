import React from "react";

export default function MentorshipEvents() {
  const events = [
    { name: "Youth Leadership Mentorship", mentor: "Dr. Apiyo" },
    { name: "Tech & Innovation Mentorship", mentor: "Komunify Team" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mentorship Events</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((e, index) => (
          <div
            key={index}
            className="p-5 rounded-xl bg-white shadow hover:shadow-md transition"
          >
            <h2 className="font-semibold">{e.name}</h2>
            <p className="text-gray-600 mt-1">Mentor: {e.mentor}</p>
            <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg">
              Register
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
