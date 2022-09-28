const getDayName = (dateString) => {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayName;
  let day = new Date(dateString);
  dayName = weekDays[day.getDay()];
  return dayName;
};

console.log(getDayName("10/11/2009"));