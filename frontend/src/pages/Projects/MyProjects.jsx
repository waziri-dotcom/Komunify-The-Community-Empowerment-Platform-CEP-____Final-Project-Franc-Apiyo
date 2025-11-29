import React from "react";
import { Plus, FolderKanban } from "lucide-react";

const MyProjects = () => {
  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Projects</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow">
          <Plus size={18} /> Create Project
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1,2,3].map((p) => (
          <div key={p} className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <FolderKanban className="text-blue-500 mb-3" size={30} />
            <h2 className="font-semibold text-lg">Community Garden Project {p}</h2>
            <p className="text-gray-500 text-sm mt-2">
              A sustainable gardening project for local families.
            </p>

            <div className="mt-4">
              <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                65% Complete
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
