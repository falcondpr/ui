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
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const colStartClasses = [
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

  const days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  const previousMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, {
      months: -1,
    });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, {
      months: 1,
    });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  return (
    <div className="max-w-sm">
      <div className="mb-5 flex items-center justify-between">
        <p className="font-bold text-lg text text-neutral-900">
          {format(firstDayCurrentMonth, "MMMM yyyy")}
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={previousMonth}
            className="text-xl text-[#FF3B30] rounded-md p-2"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={nextMonth}
            className="text-xl text-[#FF3B30] rounded-md p-2"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-x-2 gap-y-3 mb-2">
        <p className="text-[12px] text-neutral-400 text-center font-medium">
          SUN
        </p>
        <p className="text-[12px] text-neutral-400 text-center font-medium">
          MON
        </p>
        <p className="text-[12px] text-neutral-400 text-center font-medium">
          TUE
        </p>
        <p className="text-[12px] text-neutral-400 text-center font-medium">
          WED
        </p>
        <p className="text-[12px] text-neutral-400 text-center font-medium">
          THU
        </p>
        <p className="text-[12px] text-neutral-400 text-center font-medium">
          FRI
        </p>
        <p className="text-[12px] text-neutral-400 text-center font-medium">
          SAT
        </p>
      </div>

      <div className="grid grid-cols-7 gap-x-2 gap-y-1">
        {days.map((day, index) => (
          <div
            onClick={() => setSelectedDay(day)}
            key={day.toString()}
            className={classNames(
              (index === 0 && colStartClasses[getDay(day)]) || "",
              "cursor-pointer"
            )}
          >
            <p
              className={classNames(
                isEqual(day, selectedDay) ? "text-white" : "",
                !isEqual(day, selectedDay) && isToday(day)
                  ? "text-[#FF3B30]"
                  : "",
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  isSameMonth(day, firstDayCurrentMonth)
                  ? "text-gray-900"
                  : "",
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayCurrentMonth)
                  ? "text-gray-400"
                  : "",
                isEqual(day, selectedDay) && isToday(day)
                  ? "after:w-10 after:-z-10 after:rounded-full after:h-10 after:absolute after:bg-neutral-800 text-white"
                  : "",
                isEqual(day, selectedDay) && !isToday(day)
                  ? "after:w-10 after:-z-10 after:rounded-full after:h-10 after:absolute after:bg-[#FF3B30]"
                  : "",
                !isEqual(day, selectedDay) ? "hover:bg-gray-200" : "",
                isEqual(day, selectedDay) || isToday(day)
                  ? "font-semibold"
                  : "",
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
