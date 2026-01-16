import { sum } from "../utils/array.ts";

export function main() {
  const size = 1001;
  return Array.from({ length: size + 1 })
    .map((_, i) => i)
    .filter((i) => i % 2 === 1)
    .map((i) => sum(ringCorners(i)))
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
}

// size refers to one side of the grid, must be an uneven number
function ring(size: number) {
  if (size === 1) {
    return [1];
  }
  const length = size * 4 - 4;
  const start = Math.pow(size - 2, 2) + 1;
  return Array.from({ length }).map((_, i) => i + start);
}

function ringCorners(size: number) {
  if (size === 1) return [1];
  const r = ring(size);
  const startIndex = size - 2;
  const increment = size - 1;
  return [
    r[startIndex],
    r[startIndex + increment],
    r[startIndex + increment * 2],
    r[startIndex + increment * 3],
  ];
}
