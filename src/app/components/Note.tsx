"use client";

// import necessary libraries and types
import { useState, useEffect } from "react";

// define the NotesPanel component props
interface NotesPanelProps {
  selectedDate?: Date | null;
}

// function for the NotesPanel component
export default function NotesPanel({ selectedDate }: NotesPanelProps) {
  const [notesMap, setNotesMap] = useState<Record<string, string>>({});
  const [currentNote, setCurrentNote] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("calendar-notes");
    if (saved) {
      setNotesMap(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("calendar-notes", JSON.stringify(notesMap));
  }, [notesMap]);

  const handleSaveNote = () => {
    if (selectedDate) {
      const dateKey = selectedDate.toISOString().split('T')[0];
      setNotesMap(prev => ({ ...prev, [dateKey]: currentNote }));
    }
  };

  const selectedDateKey = selectedDate ? selectedDate.toISOString().split('T')[0] : null;
  const selectedNote = selectedDateKey ? notesMap[selectedDateKey] || "" : "";

  useEffect(() => {
    setCurrentNote(selectedNote);
  }, [selectedNote]);

  // render the notes panel with a textarea for adding notes and a save button
  return (
    <div className="p-4 bg-blue-50 h-full border-l border-gray-200 shadow-md rounded-l-lg">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Notes</h3>
      {selectedDate ? (
        <div>
          <p className="text-sm text-gray-800 mb-2">
            Notes for {selectedDate.toDateString()}
          </p>
          <textarea
            value={currentNote}
            onChange={(e) => setCurrentNote(e.target.value)}
            className="w-full h-32 p-2 border rounded resize-none text-gray-900"
            placeholder="Add notes for this date..."
          />
          <button
            onClick={handleSaveNote}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save Note
          </button>
        </div>
      ) : (
        <p className="text-gray-700">Select a date to add notes</p>
      )}
    </div>
  );
}