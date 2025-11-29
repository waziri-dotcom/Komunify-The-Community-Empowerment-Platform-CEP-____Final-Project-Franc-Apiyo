import React from "react";
import Card from "../../components/ui/Card";

const impactData = [
  { title: "Meals Provided", value: 3200 },
  { title: "Families Supported", value: 475 },
  { title: "Businesses Started", value: 61 },
  { title: "Youth Trained", value: 189 },
];

export default function ImpactOfDonation() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Impact of Your Donation</h1>

      <div className="grid md:grid-cols-4 gap-6">
        {impactData.map((item, i) => (
          <Card
            key={i}
            className="p-6 rounded-xl shadow text-center border-t-4 border-green-600"
          >
            <h2 className="text-3xl font-bold text-green-700">{item.value}</h2>
            <p className="text-gray-600 mt-2">{item.title}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
