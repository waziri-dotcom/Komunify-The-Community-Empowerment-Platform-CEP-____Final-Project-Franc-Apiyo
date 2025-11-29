import React from "react";
import { CalendarDays } from "lucide-react";

const sampleSessions = [
  { mentor: "Grace Wanjiku", topic: "Small Business Basics", date: "Tomorrow" },
  { mentor: "David Otieno", topic: "Digital Marketing for SMEs", date: "Fri • 4 PM" },
];

const MentorshipSessions = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
        <CalendarDays size={20} />
        Upcoming Mentorship Sessions
      </h3>

      <div className="mt-4 space-y-4">
        {sampleSessions.map((s, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-100"
          >
            <div>
              <p className="font-semibold text-gray-800">{s.topic}</p>
              <p className="text-sm text-gray-500">Mentor: {s.mentor}</p>
            </div>
            <span className="text-sm text-blue-600 font-semibold">{s.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorshipSessions;
