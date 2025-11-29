import React from "react";
import { Calendar, Globe, ArrowRight } from "lucide-react";

const grants = [
  {
    title: "Youth Community Impact Grant",
    amount: "KES 50,000 – 200,000",
    region: "Kenya",
    deadline: "March 18, 2025",
    description:
      "Funding grassroots youth-led community initiatives focusing on food security, innovation, and inclusion.",
  },
  {
    title: "African Social Innovators Fund",
    amount: "$1,000 – $10,000",
    region: "Africa",
    deadline: "April 7, 2025",
    description:
      "Supporting early-stage social entrepreneurs solving critical challenges in vulnerable communities.",
  },
  {
    title: "Women in Micro-Enterprise Fund",
    amount: "KES 30,000 – 150,000",
    region: "East Africa",
    deadline: "May 2, 2025",
    description:
      "Grant focused on empowering women-led micro-enterprises, including food businesses and artisans.",
  },
];

export default function Available() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-2">Available Grants</h1>
      <p className="text-gray-600 mb-8">
        Explore verified, high-impact funding opportunities curated to support
        communities, youth innovators, and grassroots projects.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {grants.map((grant, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md border p-5 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold mb-2">{grant.title}</h2>
            <p className="text-gray-600 mb-3">{grant.description}</p>

            <div className="text-sm text-gray-700 space-y-1 mb-3">
              <p>
                <strong>Amount:</strong> {grant.amount}
              </p>

              <p className="flex items-center gap-2">
                <Globe size={16} /> {grant.region}
              </p>

              <p className="flex items-center gap-2">
                <Calendar size={16} /> Deadline: {grant.deadline}
              </p>
            </div>

            <button className="w-full mt-3 py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
              Apply Now <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
