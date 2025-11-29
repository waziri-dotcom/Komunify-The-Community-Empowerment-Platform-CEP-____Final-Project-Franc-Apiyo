import React from "react";

const sampleProjects = [
  { id: 1, title: "Mukuru Food Rescue Pilot", role: "Project Lead", status: "Completed" },
  { id: 2, title: "Youth Skills Sprint", role: "Coordinator", status: "Active" },
  { id: 3, title: "Pad-a-Girl Drive", role: "Founder", status: "Completed" },
];

const ProjectsParticipated = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Projects Participated</h3>
        <span className="text-sm text-gray-500">{sampleProjects.length} projects</span>
      </div>

      <div className="mt-4 space-y-3">
        {sampleProjects.map((p) => (
          <div key={p.id} className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">{p.title}</p>
              <p className="text-sm text-gray-500">{p.role}</p>
            </div>
            <div className={`text-sm font-medium ${p.status === "Active" ? "text-emerald-600" : "text-amber-600"}`}>
              {p.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsParticipated;
