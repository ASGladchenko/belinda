export const validMonths = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

export const sortedMonths = (months: string[]) => {
  return months.sort((a, b) => validMonths.indexOf(a) - validMonths.indexOf(b));
};
