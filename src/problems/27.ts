import { isPrime } from "../utils/primes.ts";

export function main() {
  const results = [];
  for (let a = -1000; a < 1000; a++) {
    for (let b = -1000; b <= 1000; b++) {
      let n = 0;
      let hasFoundNonPrime = false;
      while (!hasFoundNonPrime) {
        if (isPrime(quadratic(n, a, b))) {
          n++;
          continue;
        }

        if (n > 40) {
          results.push({
            a,
            b,
            n,
          });
        }
        hasFoundNonPrime = true;
      }
    }
  }

  const largestN = results.sort((a, b) => b.n - a.n)[0];
  return largestN.a * largestN.b;
}

function quadratic(n: number, a: number, b: number) {
  return Math.pow(n, 2) + a * n + b;
}

function eulersquadratic(n: number) {
  return Math.pow(n, 2) + n + 41;
}

function incredibleQuadratic(n: number) {
  return quadratic(n, -79, 1601);
}
