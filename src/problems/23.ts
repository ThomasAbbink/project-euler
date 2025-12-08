import { sum } from "../utils/array.ts";
import { properDivisors } from "../utils/factors.ts";

export function main() {
  const limit = 28123;

  const abundantNumbers: number[] = [];

  for (let i = 1; i <= limit; i++) {
    if (isAbundant(i)) {
      abundantNumbers.push(i);
    }
  }

  const abundantSums = new Set(
    abundantNumbers.flatMap((a) => {
      return abundantNumbers
        .filter((b) => {
          return a + b < limit;
        })
        .map((b) => {
          return a + b;
        });
    })
  );

  const nonAbundantSums = [];
  for (let i = 0; i < limit; i++) {
    if (!abundantSums.has(i)) {
      nonAbundantSums.push(i);
    }
  }

  return sum(nonAbundantSums);
}

function isAbundant(n: number) {
  return sum(properDivisors(n)) > n;
}
