import React from "react";
import TrendingCommunities from "./TrendingCommunities";
import QuickActions from "./QuickActions";
import MentorshipSessions from "./MentorshipSessions";
import UpdatesFeed from "./UpdatesFeed";

const HomeDashboard = () => {
  return (
    <div className="p-6 space-y-6">

      {/* Welcome Section */}
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800">
          Welcome back to Komunify 🌍
        </h2>
        <p className="text-gray-500 mt-1">
          Empower your community through food, finance and mentorship.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <QuickActions />
          <TrendingCommunities />
          <MentorshipSessions />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1">
          <UpdatesFeed />
        </div>

      </div>
    </div>
  );
};

export default HomeDashboard;
