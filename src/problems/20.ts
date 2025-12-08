import { sum } from "../utils/array.ts";
import { factorial } from "../utils/factorial.ts";

export function main() {
  const n = 100;
  const f = factorial(n);
  const s = sum(f.toString().split("").map(Number));
  return s;
}
