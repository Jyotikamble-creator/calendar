// import necessary libraries and types
import { isSameDay, isWithinInterval, format, isSameMonth } from "date-fns";
import clsx from "clsx";

// define the DayCell component
interface DayCellProps {
  day: Date;
  startDate: Date | null;
  endDate: Date | null;
  onSelect: (day: Date) => void;
  currentDate: Date;
}

// function for the DayCell component
function DayCell({ day, startDate, endDate, onSelect, currentDate }: DayCellProps) {
  const isStart = startDate && isSameDay(day, startDate);
  const isEnd = endDate && isSameDay(day, endDate);
  const isInRange =
    startDate &&
    endDate &&
    isWithinInterval(day, { start: startDate, end: endDate }) &&
    !isStart &&
    !isEnd;

  const isCurrentMonth = isSameMonth(day, currentDate);

  // render the day cell with appropriate styles based on its state
  return (
    <div
      onClick={() => onSelect(day)}
      className={clsx(
        "p-2 text-center rounded-lg cursor-pointer text-gray-900",
        !isCurrentMonth && "text-gray-500",
        isStart && "bg-blue-600 text-white",
        isEnd && "bg-blue-600 text-white",
        isInRange && "bg-blue-200",
        "hover:bg-blue-100"
      )}
    >
      {format(day, "d")}
    </div>
  );
}

// define the CalendarGrid component
interface CalendarGridProps {
  days: Date[];
  startDate: Date | null;
  endDate: Date | null;
  onSelect: (day: Date) => void;
  currentDate?: Date;
}

// function for the CalendarGrid component
export default function CalendarGrid({ days, startDate, endDate, onSelect, currentDate = new Date() }: CalendarGridProps) {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // render the calendar grid with week day headers and day cells
  return (
    <div className="p-4 md:col-span-2">
      <div className="grid grid-cols-7 gap-2 mb-4">
        {weekDays.map(day => (
          <div key={day} className="text-center font-semibold text-gray-900">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map(day => (
          <DayCell
            key={day.toISOString()}
            day={day}
            startDate={startDate}
            endDate={endDate}
            onSelect={onSelect}
            currentDate={currentDate}
          />
        ))}
      </div>
    </div>
  );
}