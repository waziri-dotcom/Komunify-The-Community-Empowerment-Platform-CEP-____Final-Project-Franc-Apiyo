import React from "react";
import { CalendarDays } from "lucide-react";

const deadlines = [
  { grant: "Youth Community Impact Grant", date: "March 18, 2025" },
  { grant: "African Social Innovators Fund", date: "April 7, 2025" },
  { grant: "Women Micro-Enterprise Fund", date: "May 2, 2025" },
];

export default function FundingCalendar() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-2">Funding Calendar</h1>
      <p className="text-gray-600 mb-8">
        Stay ahead of deadlines. Track upcoming grant openings and closing dates
        so you never miss an opportunity.
      </p>

      <div className="space-y-4">
        {deadlines.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border shadow-sm rounded-xl p-5 flex items-center justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold">{item.grant}</h2>
              <p className="text-gray-600">Application Deadline</p>
            </div>

            <div className="flex items-center gap-2 text-blue-700 font-medium">
              <CalendarDays /> {item.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
