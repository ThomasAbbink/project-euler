import { sum } from "../utils/array.ts";

export function main() {
  const res: number[] = [];

  for (let i = 0; i < 2000; i++) {
    for (let j = 0; j < 50; j++) {
      const product = i * j;
      if (isPanDigital([i, j, product]) && !res.includes(product)) {
        res.push(product);
      }
    }
  }
  return sum(res);
}

function isPanDigital(n: number[]) {
  const string = n.join("");
  return string.split("").sort().join("") === "123456789";
}
