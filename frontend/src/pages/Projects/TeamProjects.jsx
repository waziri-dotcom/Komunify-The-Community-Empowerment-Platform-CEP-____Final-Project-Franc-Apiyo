import React from "react";
import { Users } from "lucide-react";

const TeamProjects = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Team Projects</h1>

      <div className="space-y-4">
        {[1,2,3].map((team) => (
          <div key={team} className="p-5 bg-white rounded-xl shadow hover:shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-bold text-lg">
                  Water Sanitation Project {team}
                </h2>
                <p className="text-gray-500 text-sm">Led by Community Team A</p>
              </div>
              <Users size={28} className="text-blue-600" />
            </div>

            <div className="mt-3 flex gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                12 Members
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full">
                In Progress
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamProjects;
