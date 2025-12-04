import { isPrime } from "../utils/primes.ts";

export function main() {
  const iterations = 2_000_000;

  let sum = BigInt(0);

  for (let i = 0; i < iterations; i++) {
    if (isPrime(i)) {
      sum += BigInt(i);
    }
  }
  return sum;
}
