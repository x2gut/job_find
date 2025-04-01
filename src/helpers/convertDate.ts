const convertDate = (date: Date | string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default convertDate;
