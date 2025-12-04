import { product } from "../utils/array.ts";

export function main() {
  const target = 1000;
  // a^2 * b^2 = c^ && a < b < c && a + b + c === 1000

  const triplets = [];
  for (let i = 1; i < 400; i++) {
    for (let j = 1; j < 400; j++) {
      if (j > i && i + j < target) {
        triplets.push([i, j, target - i - j]);
      }
    }
  }
  const found = triplets.find((t) => {
    return t[0] ** 2 + t[1] ** 2 === t[2] ** 2;
  });

  if (!found) {
    throw new Error("could not find pythagorean triplet");
  }
  return product(found);
}
