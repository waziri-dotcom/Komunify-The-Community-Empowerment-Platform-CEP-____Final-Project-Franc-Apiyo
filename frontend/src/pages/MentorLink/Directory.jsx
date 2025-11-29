import React, { useState } from "react";
import { Search, Star, Filter } from "lucide-react";

const mentors = [
  { id: 1, name: "Sarah Kim", expertise: "Business Strategy", rating: 4.8 },
  { id: 2, name: "James Otieno", expertise: "Social Impact", rating: 4.9 },
  { id: 3, name: "Grace Muthoni", expertise: "Tech & Innovation", rating: 4.7 },
];

export default function Directory() {
  const [query, setQuery] = useState("");

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Mentor Directory</h1>

      {/* Search Bar */}
      <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          placeholder="Search mentors, expertise…"
          className="flex-1 outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Filter className="w-5 h-5 text-gray-500 cursor-pointer" />
      </div>

      {/* Mentor Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {mentors
          .filter((m) =>
            m.name.toLowerCase().includes(query.toLowerCase()) ||
            m.expertise.toLowerCase().includes(query.toLowerCase())
          )
          .map((mentor) => (
            <div
              key={mentor.id}
              className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold">{mentor.name}</h2>
              <p className="text-gray-600">{mentor.expertise}</p>
              <div className="flex items-center mt-2 text-yellow-500">
                <Star className="w-4 h-4" />
                <span className="ml-1 font-medium">{mentor.rating}</span>
              </div>

              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg w-full">
                View Profile
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
