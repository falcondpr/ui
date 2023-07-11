import { useState } from "react";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  parse,
  startOfToday,
} from "date-fns";
import {
  FaAngleLeft,
  FaAngleRight,
  FaAnglesLeft,
  FaAnglesRight,
} from "react-icons/fa6";

import { Text } from "../ui";

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
  // const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(
    format(today, "MMM-yyyy")
  );
  const firstDayCurrentMonth = parse(
    currentMonth,
    "MMM-yyyy",
    new Date()
  );

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
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
    <div>
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
          {format(firstDayCurrentMonth, "MMMM yyyy")}
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
      <div className="grid grid-cols-7 gap-x-2 gap-y-3">
        {days.map((day, index) => (
          <div
            key={day.toString()}
            className={classNames(
              index === 0 && colStartClasses[getDay(day)],
              "py-1.5"
            )}
          >
            <Text>{format(day, "d")}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
