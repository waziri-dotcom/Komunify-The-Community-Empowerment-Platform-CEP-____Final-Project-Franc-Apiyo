import React from "react";
import { FileText, Download } from "lucide-react";

const Resources = () => {
  const files = [
    { name: "Project Handbook", type: "PDF" },
    { name: "Community Guidelines", type: "PDF" },
    { name: "Financial Literacy Guide", type: "Document" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Project Resources Library</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {files.map((file, index) => (
          <div
            key={index}
            className="p-5 bg-white rounded-xl shadow flex justify-between items-center"
          >
            <div className="flex items-center gap-3">
              <FileText className="text-blue-600" />
              <div>
                <h2 className="font-semibold">{file.name}</h2>
                <p className="text-sm text-gray-500">{file.type}</p>
              </div>
            </div>
            <Download className="text-gray-500 cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
