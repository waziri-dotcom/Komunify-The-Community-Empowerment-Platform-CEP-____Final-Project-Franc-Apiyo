import React from "react";
import Contributions from "./Contributions";
import ProjectsParticipated from "./ProjectsParticipated";
import MentorshipHours from "./MentorshipHours";
import Certificates from "./Certificates";
import ImpactStats from "./ImpactStats";

const Profile = () => {
  const user = {
    name: "Dr. Franc Paul Apiyo",
    role: "Founder — Komunify",
    location: "Nairobi, Kenya",
    bio:
      "Biomedical Engineer & Social Health Researcher. Building data-driven community solutions for food security and micro-entrepreneurship.",
    avatarAlt: "Franc Paul Apiyo",
  };

  return (
    <div className="p-6 space-y-6">
      {/* Hero */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-800">
            FP
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-sm text-gray-600">{user.role} • {user.location}</p>
            <p className="mt-3 text-gray-600">{user.bio}</p>
            <div className="mt-4 flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm shadow-sm">Edit Profile</button>
              <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm">Share Profile</button>
            </div>
          </div>

          <ImpactStats small />
        </div>
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Contributions />
          <ProjectsParticipated />
          <MentorshipHours />
        </div>

        <div className="space-y-6">
          <Certificates />
          {/* Add other sidebar widgets here */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
