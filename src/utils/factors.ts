export function findFactors(n: number) {
  const factors = [];
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      factors.push(i);
      let upperFactor = n / i;
      if (upperFactor !== i) {
        factors.push(n / i);
      }
    }
  }
  return factors;
}

export function properDivisors(n: number) {
  return findFactors(n).filter((x) => x !== n);
}
