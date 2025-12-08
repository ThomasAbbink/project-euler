export function main() {
  let string = "0123456789";
  const iterations = 1000000;

  const permutations = [string];
  for (let i = 1; i < iterations; i++) {
    const next = permute(string);
    if (next) {
      permutations.push(next);
      string = next;
    }
  }
  return string;
}

function permute(s: string) {
  const chars = s.split("");

  const permutationOne = chars
    .filter((c, index) => {
      return c < chars[index + 1];
    })
    .reverse()[0];

  const swapIndex = chars.indexOf(permutationOne);

  if (permutationOne === undefined) {
    return false;
  }

  const permutationTwo = chars
    .filter((c, index) => {
      return index > swapIndex && c > permutationOne;
    })
    .sort()[0];

  const swapped = swap(s, swapIndex, chars.indexOf(permutationTwo));

  const sorted = sort(swapped, swapIndex);

  return sorted;
}

function sort(s: string, index: number) {
  const start = s.substring(0, index + 1);
  const end = s.substring(index + 1);
  return `${start}${end.split("").sort().join("")}`;
}

function swap(s: string, i: number, j: number) {
  const one = s[i];
  const two = s[j];
  const chars = s.split("");
  chars[i] = two;
  chars[j] = one;

  return chars.join("");
}

// 0123
// 0132 - > 0231 -> sort to 0213
// 0213
// 0231
// 0231

// 123456789
// 123456798
// 123456879
// 123456897

// 123456897
// 123457689
// 123457698
// 123457869
