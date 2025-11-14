export function main() {
  const limit = 4_000_000;
  const numbers = [1, 2];
  while (true) {
    const next = numbers[numbers.length - 1] + numbers[numbers.length - 2];
    if (next > limit) {
      break;
    }
    numbers.push(next);
  }
  return numbers
    .filter((n) => n % 2 === 0)
    .reduce((acc, curr) => acc + curr, 0);
}
