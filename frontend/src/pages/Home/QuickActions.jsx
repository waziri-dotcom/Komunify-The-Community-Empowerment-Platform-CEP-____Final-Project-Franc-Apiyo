import React from "react";
import { PlusCircle, Users, Calendar, FolderPlus } from "lucide-react";

const QuickActions = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-800">
        Quick Actions
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">

        {/* Create Project */}
        <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-xl text-center transition border border-blue-100">
          <PlusCircle size={28} className="mx-auto text-blue-600" />
          <p className="text-sm font-semibold mt-2 text-gray-700">
            Create Project
          </p>
        </button>

        {/* Join Community */}
        <button className="p-4 bg-green-50 hover:bg-green-100 rounded-xl text-center transition border border-green-100">
          <Users size={28} className="mx-auto text-green-600" />
          <p className="text-sm font-semibold mt-2 text-gray-700">
            Join Community
          </p>
        </button>

        {/* Book Mentor */}
        <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-xl text-center transition border border-purple-100">
          <Calendar size={28} className="mx-auto text-purple-600" />
          <p className="text-sm font-semibold mt-2 text-gray-700">
            Book Mentor
          </p>
        </button>

        {/* Add Resource */}
        <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-xl text-center transition border border-orange-100">
          <FolderPlus size={28} className="mx-auto text-orange-600" />
          <p className="text-sm font-semibold mt-2 text-gray-700">
            Add Resource
          </p>
        </button>

      </div>
    </div>
  );
};

export default QuickActions;
