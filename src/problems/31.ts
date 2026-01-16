const coins: number[] = [1, 2, 5, 10, 20, 50, 100, 200];

export function main() {
  const goal = 200;
  const solutions = Array.from({ length: goal + 1 }).map((_, i) =>
    i === 0 ? 1 : 0
  );
  for (const coin of coins) {
    for (let amount = coin; amount <= goal + 1; amount++) {
      solutions[amount] += solutions[amount - coin];
    }
  }

  return solutions[200];
}
