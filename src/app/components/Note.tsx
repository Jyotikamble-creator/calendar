"use client";
import { useState, useEffect } from "react";

export default function NotesPanel() {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) setNotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", notes);
  }, [notes]);

  return (
    <div className="p-4 border-r">
      <h3 className="font-semibold mb-2">Notes</h3>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full h-40 p-2 border rounded"
      />
    </div>
  );
}