const mounthList = [
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
];

export const convertDate = (time) => {
  const date = new Date(time);
  const formatDate =
    mounthList[date.getMonth()] +
    " " +
    date.getDate() +
    ", " +
    date.getFullYear();
  return formatDate;
};
