import { sum } from "../utils/array.ts";
export function main() {
  const numbers = Array.from({ length: 100 }).map((_, i) => i + 1);

  return squareOfSum(numbers) - sumOfSquares(numbers);
}

const sumOfSquares = (numbers: number[]) => {
  return sum(numbers.map((n) => n ** 2));
};

const squareOfSum = (numbers: number[]) => {
  return sum(numbers) ** 2;
};
