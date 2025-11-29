import React, { useState } from "react";

export default function Notes() {
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState([]);

  const saveNote = () => {
    if (note.trim() !== "") {
      setSaved([...saved, note]);
      setNote("");
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">My Mentorship Notes</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <textarea
          placeholder="Write your notes here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="input h-40"
        />

        <button className="btn-primary w-full" onClick={saveNote}>
          Save Note
        </button>
      </div>

      <div className="space-y-3">
        {saved.map((n, i) => (
          <div
            key={i}
            className="p-4 bg-gray-50 border rounded-xl"
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}
