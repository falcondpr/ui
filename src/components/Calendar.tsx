import { useState } from "react";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
} from "date-fns";
import {
  FaAngleLeft,
  FaAngleRight,
  FaAnglesLeft,
  FaAnglesRight,
} from "react-icons/fa6";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

const Calendar = () => {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(
    format(today, "MMM-yyyy")
  );
  const firstDayCurrentMonth = parse(
    currentMonth,
    "MMM-yyyy",
    new Date()
  );

  let days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  const previousMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  const previousYear = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { years: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  const nextMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  const nextYear = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { years: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  return (
    <div className="max-w-sm">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={previousYear}
            className="border border-gray-300 text-sm text-gray-900 rounded-md shadow-sm p-3"
          >
            <FaAnglesLeft />
          </button>
          <button
            onClick={previousMonth}
            className="border border-gray-300 text-sm text-gray-900 rounded-md shadow-sm p-3"
          >
            <FaAngleLeft />
          </button>
        </div>
        <div className="font-medium text text-gray-500">
          {format(firstDayCurrentMonth, "MMM yyyy")}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={nextMonth}
            className="border border-gray-300 text-sm text-gray-900 rounded-md shadow-sm p-3"
          >
            <FaAngleRight />
          </button>
          <button
            onClick={nextYear}
            className="border border-gray-300 text-sm text-gray-900 rounded-md shadow-sm p-3"
          >
            <FaAnglesRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-x-2 gap-y-3">
        <p className="text-center font-bold mb-3">D</p>
        <p className="text-center font-bold mb-3">L</p>
        <p className="text-center font-bold mb-3">M</p>
        <p className="text-center font-bold mb-3">M</p>
        <p className="text-center font-bold mb-3">J</p>
        <p className="text-center font-bold mb-3">V</p>
        <p className="text-center font-bold mb-3">S</p>
      </div>
      <div className="grid grid-cols-7 gap-x-2 gap-y-1">
        {days.map((day, index) => (
          <div
            onClick={() => setSelectedDay(day)}
            key={day.toString()}
            className={classNames(
              index === 0 && colStartClasses[getDay(day)],
              "cursor-pointer"
            )}
          >
            <p
              className={classNames(
                isEqual(day, selectedDay) && "text-white",
                !isEqual(day, selectedDay) &&
                  isToday(day) &&
                  "text-red-500",
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  isSameMonth(day, firstDayCurrentMonth) &&
                  "text-gray-900",
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayCurrentMonth) &&
                  "text-gray-400",
                isEqual(day, selectedDay) &&
                  isToday(day) &&
                  "bg-red-500",
                isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  "bg-gray-900",
                !isEqual(day, selectedDay) && "hover:bg-gray-200",
                (isEqual(day, selectedDay) || isToday(day)) &&
                  "font-semibold",
                "text-center w-full py-2 rounded-full grid place-items-center"
              )}
            >
              {format(day, "d")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
