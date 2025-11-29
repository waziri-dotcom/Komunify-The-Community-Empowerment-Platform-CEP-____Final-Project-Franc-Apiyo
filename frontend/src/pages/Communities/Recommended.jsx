import React from "react";
import Card from "../../components/ui/Card";

const recommended = [
  { title: "Women in Agribusiness", reason: "Based on your interest in FoodAid" },
  { title: "Youth Mentorship Circle", reason: "Similar to sessions you joined" },
  { title: "Urban Gardening Champions", reason: "Top rated in your region" },
];

export default function Recommended() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Recommended for You</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommended.map((item, index) => (
          <Card key={index} className="p-5 rounded-xl hover:shadow-lg">
            <h2 className="font-semibold text-lg">{item.title}</h2>
            <p className="text-sm text-gray-500 mt-2">{item.reason}</p>
            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-xl">
              Join Community
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
