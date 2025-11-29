import React from "react";
import { Star } from "lucide-react";

const stories = [
  {
    name: "Mathare Women CBO",
    achievement:
      "Received KES 150,000 grant and launched a food processing micro-enterprise.",
    impact:
      "Created 12 jobs for women and provided affordable nutritious products to 300+ households.",
  },
  {
    name: "Kibera Youth Green Innovators",
    achievement:
      "Won a $4,000 innovation grant for plastic waste recycling.",
    impact:
      "Reduced local waste by 20% and trained 80 youth on recycling skills.",
  },
  {
    name: "Kayole Community Food Champions",
    achievement:
      "Received KES 70,000 for community food redistribution.",
    impact:
      "Rescued over 1.5 tons of food monthly and fed 600+ families.",
  },
];

export default function SuccessStories() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-2">Success Stories</h1>
      <p className="text-gray-600 mb-8">
        Be inspired by real community groups that secured funding and achieved
        transformational impact.
      </p>

      <div className="space-y-6">
        {stories.map((story, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-xl shadow-md p-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <Star size={26} className="text-yellow-500" />
              <h2 className="text-xl font-bold">{story.name}</h2>
            </div>

            <p className="text-gray-700 mb-2">
              <strong>Achievement:</strong> {story.achievement}
            </p>

            <p className="text-gray-600">
              <strong>Impact:</strong> {story.impact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
