export function main() {
  const res = BigInt(Math.pow(2, 1000));
  return res
    .toString()
    .split("")
    .reduce((acc, curr) => {
      return parseInt(curr) + acc;
    }, 0);
}
