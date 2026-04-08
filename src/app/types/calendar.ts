export type CalendarState = {
  currentDate: Date;
  days: Date[];
  startDate: Date | null;
  endDate: Date | null;
};

export type DayCellProps = {
  day: Date;
  startDate: Date | null;
  endDate: Date | null;
  onSelect: (day: Date) => void;
};

export type CalendarGridProps = {
  days: Date[];
  startDate: Date | null;
  endDate: Date | null;
  onSelect: (day: Date) => void;
};

export type HeaderProps = {
  currentDate: Date;
};