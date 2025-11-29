import React from "react";
import Card from "../../components/ui/Card";
import { Quote } from "lucide-react";

const stories = [
  {
    name: "Achieng’ – Kisumu",
    text: "Through Komunify, our group now receives weekly food packages and we started a small catering business.",
  },
  {
    name: "Brian – Kayole",
    text: "The mentorship program helped me start my community laundry project.",
  },
];

export default function Stories() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Community Stories</h1>

      <div className="space-y-6">
        {stories.map((s, i) => (
          <Card key={i} className="p-6 rounded-xl shadow-md relative">
            <Quote className="absolute top-4 right-4 text-green-500" />
            <p className="text-gray-700 italic">“{s.text}”</p>
            <p className="mt-4 font-semibold text-green-700">— {s.name}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
