// import necessary libraries and types
import { format } from "date-fns";
import Image from "next/image";

// define the Header component props
interface HeaderProps {
  currentDate: Date;
  onNextMonth: () => void;
  onPrevMonth: () => void;
}

// function for the Header component
export default function Header({ currentDate, onNextMonth, onPrevMonth }: HeaderProps) {
  return (
    <div className="relative h-64">
      {/* render the calendar hero image */}
      <Image
        src="/w1.png"
        alt="Calendar hero image"
        fill
        className="object-cover"
        loading="eager"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

{/* render the header content */}
      <div className="absolute bottom-0 right-0 bg-white text-black p-4 rounded-tl-lg shadow-lg">
        <h2 className="text-xl font-bold">
          {format(currentDate, "MMMM yyyy")}
        </h2>
        {/* render the navigation buttons */}
        <div className="flex gap-2 mt-2">
          <button
            onClick={onPrevMonth}
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            ‹
          </button>
          <button
            onClick={onNextMonth}
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}