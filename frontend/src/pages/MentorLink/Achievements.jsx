import React from "react";
import { Award, CheckCircle } from "lucide-react";

const achievements = [
  { id: 1, title: "First 5 Sessions", icon: Award, earned: true },
  { id: 2, title: "Mentorship Star", icon: CheckCircle, earned: false },
];

export default function Achievements() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Achievements & Badges</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {achievements.map((a) => {
          const Icon = a.icon;
          return (
            <div
              key={a.id}
              className={`p-6 rounded-xl shadow text-center ${
                a.earned ? "bg-blue-50" : "bg-gray-100"
              }`}
            >
              <Icon className="w-10 h-10 mx-auto text-blue-600" />
              <h2 className="mt-3 font-semibold">{a.title}</h2>
              {a.earned ? (
                <p className="text-green-600 mt-2">Unlocked</p>
              ) : (
                <p className="text-gray-500 mt-2">Locked</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
