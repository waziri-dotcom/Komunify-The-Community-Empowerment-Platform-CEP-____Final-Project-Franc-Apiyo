import React from "react";
import { CalendarDays } from "lucide-react";

export default function CalendarPage() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <CalendarDays size={28} />
        <h1 className="text-2xl font-bold">Events Calendar</h1>
      </div>

      <p className="text-gray-600 mb-6">
        Explore upcoming community events happening this month.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5].map((day) => (
          <div
            key={day}
            className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">Day {day}</h2>
            <p className="text-gray-500 mt-1">Workshops, trainings & meetups</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
