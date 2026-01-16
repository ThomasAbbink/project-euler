export function main() {
  const max = 100;
  const res: number[] = [];
  for (let i = 2; i <= max; i++) {
    for (let j = 2; j <= max; j++) {
      const term = Math.pow(i, j);
      if (!res.includes(term)) {
        res.push(term);
      }
    }
  }
  return res.length;
}
