export const getAllMonthsInYear = () => {
  return fillArrayWithinRange(1, 12).map((month) =>
    month.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })
  );
};

export const getDefaultYears = () => {
  return fillArrayWithinRange(getCurrentYear(), 2035).map(String);
};

const fillArrayWithinRange = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((_, index) => start + index);
};

const getCurrentYear = () => {
  return new Date().getFullYear();
};
