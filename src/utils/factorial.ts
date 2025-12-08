export function factorial(n: number): bigint {
  return n < 2 ? BigInt(1) : factorial(n - 1) * BigInt(n);
}
