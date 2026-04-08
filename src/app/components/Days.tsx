import { isSameDay, isWithinInterval } from "date-fns";
import clsx from "clsx";

export default function DayCell({
  day,
  startDate,
  endDate,
  onSelect,
}: any) {
  const isStart = startDate && isSameDay(day, startDate);
  const isEnd = endDate && isSameDay(day, endDate);

  const isInRange =
    startDate &&
    endDate &&
    isWithinInterval(day, { start: startDate, end: endDate });

  return (
    <div
      onClick={() => onSelect(day)}
      className={clsx(
        "p-2 text-center rounded-lg cursor-pointer",

        isStart && "bg-blue-600 text-white",
        isEnd && "bg-blue-600 text-white",
        isInRange && "bg-blue-200",

        "hover:bg-blue-100"
      )}
    >
      {day.getDate()}
    </div>
  );
}