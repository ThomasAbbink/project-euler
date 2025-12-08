export function main() {
  for (let i = 1; i < 10000; i++) {
    const next = fibonacci(i);
    if (next.toString().length >= 1000) {
      return i;
    }
  }
}

const map = new Map();
function fibonacci(n: number): bigint {
  if (n === 1 || n === 2) return BigInt(1);
  if (map.has(n)) {
    return map.get(n);
  }
  const next = fibonacci(n - 1) + fibonacci(n - 2);
  map.set(n, next);
  return next;
}
