import React, { useState } from "react";

const UploadResource = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("Materials");

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production: send to your upload endpoint (S3 / Cloudinary) and save metadata to DB
    console.log({ title, file, category });
    alert("Resource uploaded (mock). Integrate backend to complete.");
    setTitle("");
    setFile(null);
    setCategory("Materials");
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800">Upload Resource</h3>
      <p className="text-sm text-gray-500 mt-1">Share guides, templates or toolkits to help the community.</p>

      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label className="block text-sm text-gray-700">Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-200 p-2" placeholder="E.g., Volunteer Roster Template" required />
        </div>

        <div>
          <label className="block text-sm text-gray-700">Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-200 p-2">
            <option>Materials</option>
            <option>Tools</option>
            <option>Guides</option>
            <option>Toolkits</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-700">File</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mt-1" required />
          {file && <p className="mt-2 text-sm text-gray-500">Selected: {file.name}</p>}
        </div>

        <div className="flex gap-3">
          <button type="submit" className="px-4 py-2 rounded-lg bg-emerald-600 text-white">Upload</button>
          <button type="button" onClick={() => { setTitle(""); setFile(null); setCategory("Materials"); }} className="px-4 py-2 rounded-lg border border-gray-200">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default UploadResource;
