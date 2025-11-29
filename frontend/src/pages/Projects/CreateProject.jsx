import React, { useState } from "react";
import { Upload } from "lucide-react";

const CreateProject = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
  });

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create New Project</h1>

      <form className="space-y-5 bg-white p-6 rounded-xl shadow">
        <div>
          <label className="text-gray-700 font-medium">Project Name</label>
          <input
            type="text"
            placeholder="Enter project title"
            className="w-full mt-2 p-3 border rounded-lg"
            value={form.name}
            onChange={(e) => setForm({...form, name: e.target.value})}
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium">Description</label>
          <textarea
            rows="4"
            className="w-full mt-2 p-3 border rounded-lg"
            placeholder="Describe your community project..."
            value={form.description}
            onChange={(e) => setForm({...form, description: e.target.value})}
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium">Category</label>
          <select
            className="w-full mt-2 p-3 border rounded-lg"
            value={form.category}
            onChange={(e) => setForm({...form, category: e.target.value})}
          >
            <option>Select Category</option>
            <option>FoodAid</option>
            <option>FinGrow</option>
            <option>Health & Sanitation</option>
            <option>Youth Empowerment</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <Upload className="text-blue-600" />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Upload Files</button>
        </div>

        <button className="mt-6 w-full py-3 bg-green-600 text-white rounded-lg text-lg">
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
