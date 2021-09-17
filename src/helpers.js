const helpers = {
  currentDay: {
    getDayFetch(day) {
      if (day < 10) return (day = "0" + day);
      return day;
    },
    getMonthFetch(date) {
      let monthFetch = date.getMonth();
      if (monthFetch < 10) {
        monthFetch = "0" + monthFetch;
      }
      return monthFetch;
    },
    monthsTable: [
      "Января",
      "Февраля",
      "Марта",
      "Апреля",
      "Мая",
      "Июня",
      "Июля",
      "Августа",
      "Сентября",
      "Октября",
      "Ноября",
      "Декабря",
    ],
  },
  calendar: {
    monthsTable: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
  },
};

export default helpers;
