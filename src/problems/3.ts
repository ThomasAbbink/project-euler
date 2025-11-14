export function main() {
  let n = 600851475143;

  const primefactors = [];

  let d = 2;
  while (n > 1) {
    while (n % d === 0) {
      primefactors.push(d);
      n = n / d;
    }
    d++;
  }

  return Math.max(...primefactors);
}
