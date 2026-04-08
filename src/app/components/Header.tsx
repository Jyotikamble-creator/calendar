import { format } from "date-fns";

export default function Header({ currentDate }: { currentDate: Date }) {
  return (
    <div className="relative h-64">
      <img
        src=""
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 right-0 bg-blue-500 text-white p-4">
        <h2 className="text-xl font-bold">
          {format(currentDate, "MMMM yyyy")}
        </h2>
      </div>
    </div>
  );
}