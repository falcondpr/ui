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
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

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
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  const previousMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  const nextMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };
  
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <div className="font-semibold text-xl text-gray-500">
          {format(firstDayCurrentMonth, "MMMM yyyy")}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={previousMonth}
            className="text-gray-900 bg-gray-100 rounded-sm p-3"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={nextMonth}
            className="text-gray-900 bg-gray-100 rounded-sm p-3"
          >
            <FaAngleRight />
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
