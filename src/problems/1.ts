export function main(): number {
  return Array.from({ length: 1000 })
    .map((_, i) => i)
    .filter((i) => i % 3 === 0 || i % 5 === 0)
    .reduce((acc, curr) => acc + curr, 0);
}
