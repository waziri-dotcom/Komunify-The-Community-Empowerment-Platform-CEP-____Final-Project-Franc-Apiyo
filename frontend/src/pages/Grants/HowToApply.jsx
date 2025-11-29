import React from "react";
import { FileText, Send, ClipboardList } from "lucide-react";

export default function HowToApply() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-2">How to Apply</h1>
      <p className="text-gray-600 mb-8">
        Follow these simple steps to submit a strong, complete grant application
        and increase your chances of success.
      </p>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-md border">
          <div className="flex items-center gap-4 mb-3">
            <ClipboardList size={30} className="text-blue-600" />
            <h2 className="text-xl font-semibold">Step 1: Prepare Your Documents</h2>
          </div>
          <p className="text-gray-600">
            Gather all required documents including the concept note, budget, and
            eligibility documents.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border">
          <div className="flex items-center gap-4 mb-3">
            <FileText size={30} className="text-blue-600" />
            <h2 className="text-xl font-semibold">Step 2: Fill Out the Application Form</h2>
          </div>
          <p className="text-gray-600">
            Visit the grant’s official application website or fill the online
            form provided through Komunify.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border">
          <div className="flex items-center gap-4 mb-3">
            <Send size={30} className="text-blue-600" />
            <h2 className="text-xl font-semibold">Step 3: Submit & Track</h2>
          </div>
          <p className="text-gray-600">
            Submit the completed application and track your status from your
            Komunify dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}
