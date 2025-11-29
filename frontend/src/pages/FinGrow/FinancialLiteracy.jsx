import React from "react";
import Card from "../../components/ui/Card";
import { BookOpen, PlayCircle, FileText } from "lucide-react";

const modules = [
  {
    title: "Budgeting for Small Businesses",
    type: "Video",
    icon: PlayCircle,
  },
  {
    title: "Understanding Loan Terms",
    type: "Article",
    icon: FileText,
  },
  {
    title: "Saving Culture & Investment Basics",
    type: "Video",
    icon: PlayCircle,
  },
];

const FinancialLiteracy = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl text-green-700 font-semibold">Financial Literacy Hub</h2>
      <p className="text-gray-600">Empowering you with knowledge for long-term financial stability.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {modules.map((m, i) => (
          <Card key={i} className="p-5 hover:shadow-lg transition">
            <m.icon className="text-green-700 mb-3" size={40} />
            <h3 className="text-lg font-semibold">{m.title}</h3>
            <p className="text-gray-500 text-sm">{m.type} Resource</p>

            <button className="mt-4 text-green-700 font-semibold">
              Open Resource →
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FinancialLiteracy;
