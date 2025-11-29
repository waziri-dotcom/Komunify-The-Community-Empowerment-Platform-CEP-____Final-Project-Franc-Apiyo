import React from "react";
import { CheckCircle } from "lucide-react";

export default function Eligibility() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-2">Eligibility & Requirements</h1>
      <p className="text-gray-600 mb-8">
        Understand what you need before applying for grants. Requirements vary
        by program but follow common criteria aligned with community impact and
        sustainability.
      </p>

      <div className="bg-white border shadow-md rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-bold">Common Eligibility Criteria</h2>

        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle className="text-green-600" size={22} />
            <p>Your project must directly benefit a community or vulnerable group.</p>
          </li>

          <li className="flex items-start gap-3">
            <CheckCircle className="text-green-600" size={22} />
            <p>You must be part of a registered community group or initiative.</p>
          </li>

          <li className="flex items-start gap-3">
            <CheckCircle className="text-green-600" size={22} />
            <p>
              Demonstrate capacity to implement and report project outcomes.
            </p>
          </li>

          <li className="flex items-start gap-3">
            <CheckCircle className="text-green-600" size={22} />
            <p>
              Provide a simple budget, proposed activities, and measurable goals.
            </p>
          </li>
        </ul>

        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-2">Required Documents</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>National ID / Passport</li>
            <li>Community group registration certificate</li>
            <li>1-page project concept note</li>
            <li>Simple budget breakdown</li>
            <li>Recommendation letter (optional)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
