"use client";

import Header from "@/app/components/Header";
import CalendarGrid from "@/app/components/Days";
import NotesPanel from "@/app/components/Note";
import { useCalendar } from "@/app/hooks/calendar";

export default function Calendar() {
  const {
    currentDate,
    days,
    startDate,
    endDate,
    handleSelect,
  } = useCalendar();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl">

      <Header currentDate={currentDate} />

      <div className="grid md:grid-cols-3">
        <NotesPanel />
        <CalendarGrid
          days={days}
          startDate={startDate}
          endDate={endDate}
          onSelect={handleSelect}
        />
      </div>

    </div>
  );
}