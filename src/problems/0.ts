export function main(): bigint {
  const squares: bigint[] = Array.from({ length: iterations })
    .map((_, i) => i)
    .filter((_, i) => i % 2 !== 0)
    .map((i) => {
      const square = BigInt(i) ** 2n;

      return square;
    });

  return squares.reduce((acc, curr) => acc + curr, 0n);
}

const iterations = 967000;
