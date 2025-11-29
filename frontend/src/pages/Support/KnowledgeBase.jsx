import React, { useState } from "react";
import { Book, Search } from "lucide-react";

const articles = [
  { title: "How to Apply for a FinGrow Loan", category: "FinGrow" },
  { title: "How FoodAid Matching Works", category: "FoodAid" },
  { title: "Create & Manage Community Projects", category: "Projects" },
  { title: "Troubleshooting Login or OTP Errors", category: "Account" },
];

const KnowledgeBase = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold flex items-center gap-2 mb-4">
        <Book size={20}/> Knowledge Base
      </h1>

      <div className="flex items-center gap-2 mb-4 border p-2 rounded-xl">
        <Search size={18}/>
        <input
          className="flex-1 outline-none"
          placeholder="Search articles..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles
          .filter((a) => a.title.toLowerCase().includes(search.toLowerCase()))
          .map((a, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow hover:bg-gray-50 cursor-pointer">
              <h2 className="font-semibold">{a.title}</h2>
              <p className="text-sm text-gray-500">{a.category}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default KnowledgeBase;
