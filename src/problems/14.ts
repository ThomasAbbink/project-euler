export function main() {
  const limit = 1000000;
  const map = new Map();
  let largest = 0;
  let startingNumber = 0;
  for (let i = 1; i < limit; i++) {
    let j = i;
    let iterations = 0;

    while (j > 1) {
      j = iterate(j);

      if (map.has(j)) {
        iterations += map.get(j);
        break;
      }

      iterations++;
    }
    if (iterations > largest) {
      largest = iterations;
      startingNumber = i;
    }
    map.set(i, iterations);
  }
  return startingNumber;
}

const iterate = (n: number) => {
  if (n % 2 === 0) {
    return n / 2;
  }
  return 3 * n + 1;
};
