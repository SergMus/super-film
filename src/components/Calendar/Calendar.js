import React, { useState } from "react";
import styles from "./../../components/Calendar/Calendar.module.css";
import { NavLink } from "react-router-dom";
import helpers from "../../helpers";

const Calendar = () => {
  const date = new Date();
  date.setDate(1);
  const monthNames = helpers.calendar.monthsTable;
  const days = [];

  const [currentDate, setCurrentDate] = useState(date);
  const [months, setMonths] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());

  const daysCountInMonth = new Date(
    currentDate.getFullYear(),
    months + 1,
    0
  ).getDate();

  const firstDayIndex = currentDate.getDay();

  const prevLastDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  ).getDate();

  const monthDays = () => {
    for (
      let x = (firstDayIndex === 0 ? firstDayIndex + 7 : firstDayIndex) - 1;
      x > 0;
      x--
    ) {
      days.push({ m: "prev", count: prevLastDay - x + 1 });
    }
    for (let i = 0; i < daysCountInMonth; i++) {
      days.push({ m: "current", count: i + 1 });
    }
    for (
      let j = 0;
      j <
      42 -
        (firstDayIndex === 0 &&
        (prevLastDay === 31 || prevLastDay === 30) &&
        daysCountInMonth === 31
          ? firstDayIndex + 7
          : firstDayIndex) -
        daysCountInMonth +
        1;
      j++
    ) {
      days.push({ m: "next", count: j + 1 });
    }
  };
  monthDays();

  const prevMonth = () => {
    if (months <= 0) {
      return (
        setMonths(11),
        setYear(year - 1),
        setCurrentDate(new Date(currentDate.setMonth(months - 1)))
      );
    } else {
      setMonths(months - 1);
      setCurrentDate(new Date(currentDate.setMonth(months - 1)));
    }
  };
  const nextMonth = () => {
    if (months >= 11) {
      return (
        setMonths(0),
        setYear(year + 1),
        setCurrentDate(new Date(currentDate.setMonth(months + 1)))
      );
    } else {
      setMonths(months + 1);
      setCurrentDate(new Date(currentDate.setMonth(months + 1)));
    }
  };
  const showData = (e) => {
    new Date(currentDate.setDate(+e.target.innerText));
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.calendar_nav}>
        <button className={styles.btn} onClick={prevMonth}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className={styles.title}>
          {monthNames[months]} {year}
        </div>
        <button className={styles.btn} onClick={nextMonth}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <div className={styles.calendar_content}>
        {days.map((item, index) => {
          return item.m === "current" ? (
            <NavLink
              to={{
                pathname: "/films",
                state: { date: currentDate, month: monthNames[months] },
              }}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <div
                className={styles.month_days}
                key={new Date()}
                onClick={showData}
              >
                {item.count}
              </div>
            </NavLink>
          ) : (
            <div
              className={[styles.month_days, styles.prev_next_days].join(" ")}
              key={index}
            >
              {item.count}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
