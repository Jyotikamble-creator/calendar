// import necessary libraries and types
import { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import { generateCalendarDays } from "@/app/utils/useCalendar";

// custom hook to manage calendar state and logic
export const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const days = generateCalendarDays(currentDate);

  const handleSelect = (day: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else {
      if (day < startDate) {
        setEndDate(startDate);
        setStartDate(day);
      } else {
        setEndDate(day);
      }
    }
  };

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  return {
    currentDate,
    days,
    startDate,
    endDate,
    handleSelect,
    nextMonth,
    prevMonth,
  };
};