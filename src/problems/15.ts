export function main() {
  // 20 take 20 = 40!  / 20! * (40 - 20)!
  const gridSize = 20;
  const factorialGrid = factorial(gridSize);
  return factorial(gridSize * 2) / (factorialGrid * factorialGrid);
}

function factorial(n: number): number {
  return n < 2 ? 1 : factorial(n - 1) * n;
}
