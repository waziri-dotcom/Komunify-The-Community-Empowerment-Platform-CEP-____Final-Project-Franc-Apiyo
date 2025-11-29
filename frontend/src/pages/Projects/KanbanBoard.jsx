import React from "react";

const KanbanBoard = () => {
  const columns = ["To Do", "In Progress", "Completed"];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Project Kanban Board</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columns.map((col) => (
          <div key={col} className="bg-gray-50 rounded-xl p-4 shadow">
            <h2 className="text-lg font-semibold mb-3">{col}</h2>

            {[1,2].map((task) => (
              <div key={task} className="bg-white p-4 mb-3 rounded-lg shadow-sm">
                <h3 className="font-semibold">Task {task}</h3>
                <p className="text-gray-500 text-sm mt-2">Task description here...</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
