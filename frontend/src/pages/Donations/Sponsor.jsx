import React from "react";
import Card from "../../components/ui/Card";

const communities = [
  { name: "Kawangware Feeding Program", needs: "Weekly food packages" },
  { name: "Githurai Women Group", needs: "Small business startup kits" },
];

export default function Sponsor() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Sponsor a Community</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {communities.map((c, i) => (
          <Card key={i} className="p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold">{c.name}</h2>
            <p className="text-gray-500 mt-2">{c.needs}</p>
            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-xl">
              Sponsor
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
