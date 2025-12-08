export function main() {
  const startYear = 1901;
  const endYear = 2000;
  const start = new Date(startYear, 0, 0, 0);

  const endDate = new Date(endYear, 11, 31, 1);

  let count = 0;
  while (start <= endDate) {
    if (start.getDay() === 0 && start.getDate() === 1) {
      count++;
    }
    start.setDate(start.getDate() + 1);
  }
  return count;
}
