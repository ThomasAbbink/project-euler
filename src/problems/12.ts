import { findFactors } from "../utils/factors.ts";

export function main() {
  let n = 0;
  let f_length = 0;
  let t = 0;

  while (f_length <= 500) {
    t = nthTriangularNumber(n);
    f_length = findFactors(t).length;
    n++;
  }

  return t;
}

function nthTriangularNumber(n: number) {
  return (n * (n + 1)) / 2;
}
