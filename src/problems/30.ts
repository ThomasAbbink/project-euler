import { sum } from "../utils/array.ts";

export function main() {
  const size = 5;
  const res: number[] = [];
  for (let i = 2; i < 1000000; i++) {
    const digits = String(i)
      .split("")
      .map((d) => Number(d));
    if (sum(digits.map((d) => Math.pow(d, size))) === i) {
      res.push(i);
    }
  }

  return sum(res);
}
