import { factorial } from "../utils/factorial.ts";

export function main() {
  // 20 take 20 = 40!  / 20! * (40 - 20)!
  const gridSize = 20;
  const factorialGrid = factorial(gridSize);
  return factorial(gridSize * 2) / (factorialGrid * factorialGrid);
}
