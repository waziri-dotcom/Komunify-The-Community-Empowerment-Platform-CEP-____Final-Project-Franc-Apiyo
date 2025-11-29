import React, { useState } from "react";
import { Calendar, Clock } from "lucide-react";

export default function BookSession() {
  const [mentor, setMentor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Book a Mentorship Session</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <select
          className="input"
          value={mentor}
          onChange={(e) => setMentor(e.target.value)}
        >
          <option value="">Select Mentor</option>
          <option value="Sarah Kim">Sarah Kim</option>
          <option value="James Otieno">James Otieno</option>
        </select>

        <div className="flex gap-4">
          <div className="flex-1 space-y-1">
            <label>Date</label>
            <div className="flex items-center gap-2 input">
              <Calendar className="w-5 h-5 text-gray-500" />
              <input
                type="date"
                className="flex-1 outline-none"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-1 space-y-1">
            <label>Time</label>
            <div className="flex items-center gap-2 input">
              <Clock className="w-5 h-5 text-gray-500" />
              <input
                type="time"
                className="flex-1 outline-none"
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
        </div>

        <button className="btn-primary w-full">
          Confirm Session
        </button>
      </div>
    </div>
  );
}
