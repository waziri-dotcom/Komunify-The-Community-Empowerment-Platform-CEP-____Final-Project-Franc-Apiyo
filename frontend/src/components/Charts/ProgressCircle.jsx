import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function ProgressCircle({ value, title }) {
  const data = [
    {
      name: "Progress",
      value: value,
      fill: "green",
    },
  ];

  return (
    <div className="p-6 bg-white shadow rounded-2xl text-center">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      <ResponsiveContainer width="100%" height={250}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="100%"
          barSize={15}
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar
            minAngle={15}
            background
            clockWise
            dataKey="value"
          />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>

      <p className="text-lg font-semibold text-gray-700 mt-2">{value}%</p>
    </div>
  );
}
