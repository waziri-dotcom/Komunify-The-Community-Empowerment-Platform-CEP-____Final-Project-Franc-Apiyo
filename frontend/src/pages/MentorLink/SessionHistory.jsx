import React from "react";
import { Calendar, User } from "lucide-react";

const sessions = [
  { id: 1, mentor: "Sarah Kim", date: "2025-02-10", status: "Completed" },
  { id: 2, mentor: "James Otieno", date: "2025-01-20", status: "Completed" },
];

export default function SessionHistory() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Session History</h1>

      <div className="space-y-4">
        {sessions.map((s) => (
          <div
            key={s.id}
            className="bg-white p-4 rounded-xl shadow flex items-center justify-between"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-500" />
                <span className="font-medium">{s.mentor}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>{s.date}</span>
              </div>
            </div>

            <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
              {s.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
