import { reverse } from "../utils/string.ts";

export function main() {
  const digitCount = 3;
  const zeroes = Array.from({ length: digitCount })
    .map(() => "0")
    .join("");

  const length = `1${zeroes}`;
  const numbers = Array.from({ length: Number.parseInt(length) })
    .map((_, i) => i)
    .filter((i) => i > Number.parseInt(length.slice(0, digitCount)));

  const palindromes = numbers
    .flatMap((n) => {
      return numbers.map((k) => k * n);
    })
    .filter(isPalindrome);
  return Math.max(...palindromes);
}

const isPalindrome = (n: number) => {
  const string = String(n);
  const first = string.substring(0, Math.floor(string.length / 2));
  const second = string.substring(Math.ceil(string.length / 2), string.length);
  return first === reverse(second);
};
