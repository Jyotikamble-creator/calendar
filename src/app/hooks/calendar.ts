import { useState } from "react";
import { generateCalendarDays } from "@/app/utils/useCalendar";

export const useCalendar = () => {
  const [currentDate] = useState(new Date());
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

  return {
    currentDate,
    days,
    startDate,
    endDate,
    handleSelect,
  };
};