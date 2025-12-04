export function main() {
  // divisors:   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
  // I just did these by hand
  const primefactors = [2, 3, 2, 5, 2, 7, 3, 11, 13, 2, 17, 19];
  return primefactors.reduce((acc, curr) => acc * curr, 1);
}
