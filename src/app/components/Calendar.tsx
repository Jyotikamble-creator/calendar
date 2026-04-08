"use client";

// import all the components and hooks
import Header from "@/app/components/Header";
import CalendarGrid from "@/app/components/Days";
import NotesPanel from "@/app/components/Note";
import { useCalendar } from "@/app/hooks/calendar";

// export the main Calendar component
export default function Calendar() {
  const {
    currentDate,
    days,
    startDate,
    endDate,
    handleSelect,
    nextMonth,
    prevMonth,
  } = useCalendar();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl">
      {/* render the Header component */}
      <Header
        currentDate={currentDate}
        onNextMonth={nextMonth}
        onPrevMonth={prevMonth}
      />

      <div className="grid md:grid-cols-3 min-h-[400px]">
        {/* render the NotesPanel components */}
        <NotesPanel selectedDate={startDate} />


        {/* render the CalendarGrid component */}
        <CalendarGrid
          days={days}
          startDate={startDate}
          endDate={endDate}
          onSelect={handleSelect}
          currentDate={currentDate}
        />
      </div>
    </div>
  );
}