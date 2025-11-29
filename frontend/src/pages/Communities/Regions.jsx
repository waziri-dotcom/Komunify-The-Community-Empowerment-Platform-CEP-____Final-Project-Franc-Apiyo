import React from "react";
import Card from "../../components/ui/Card";
import { MapPin } from "lucide-react";

const regions = [
  { region: "Nairobi", communities: 122 },
  { region: "Coast", communities: 61 },
  { region: "Nyanza", communities: 74 },
  { region: "Rift Valley", communities: 89 },
];

export default function Regions() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Communities by Region</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {regions.map((r, i) => (
          <Card key={i} className="p-6 rounded-xl shadow hover:shadow-md">
            <div className="flex items-center gap-3">
              <MapPin className="text-green-600" />
              <h2 className="text-lg font-semibold">{r.region}</h2>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {r.communities} communities
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
