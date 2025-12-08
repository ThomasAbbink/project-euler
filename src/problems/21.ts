import { sum } from "../utils/array.ts";
import { properDivisors } from "../utils/factors.ts";

export function main() {
  const target = 10000;

  const pairs: number[] = [];
  for (let i = 1; i <= target; i++) {
    if (pairs.includes(i)) {
      continue;
    }
    const di = sumOfDivisors(i);
    const db = sumOfDivisors(di);
    if (db === i && i !== di) {
      pairs.push(i);
      pairs.push(di);
    }
  }
  return sum(pairs);
}

function sumOfDivisors(number: number) {
  return sum(properDivisors(number));
}
