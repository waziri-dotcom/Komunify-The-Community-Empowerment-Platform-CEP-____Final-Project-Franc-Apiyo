import React from "react";

const guides = [
  { id: 1, title: "How to Verify Recipients", excerpt: "Step-by-step practical verification workflow." },
  { id: 2, title: "Running a Community Savings Group", excerpt: "Checklist + sample constitution." },
];

const Guides = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800">Guides</h3>
      <div className="mt-4 space-y-3">
        {guides.map(g => (
          <article key={g.id} className="p-3 rounded-lg bg-gray-50 border border-gray-100">
            <h4 className="font-semibold text-gray-800">{g.title}</h4>
            <p className="text-sm text-gray-500 mt-1">{g.excerpt}</p>
            <div className="mt-2">
              <button className="px-3 py-1 rounded-md bg-amber-400 text-white text-sm">Read</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Guides;
