export function main() {
  const target = 1000;
  const output = [];
  for (let i = 1; i <= target; i++) {
    output.push(speak(i));
  }
  return output.join("").length;
}

function speak(n: number): string {
  if (n < 100 && map[n]) {
    return map[n];
  }

  const string = n.toString();

  if (string.length === 2) {
    const remainder = n % 10;
    const whole = n - remainder;
    return `${map[whole]}${map[remainder]}`;
  }

  if (string.length === 3) {
    const count = Math.floor(n / 100);
    let res = `${map[count]}${map[100]}`;
    if (n % 100 !== 0) {
      res += `and${speak(parseInt(string.slice(-2)))}`;
    }
    return res;
  }

  if (string.length === 4) {
    const count = Math.floor(n / 1000);
    let res = `${map[count]}${map[1000]}`;
    if (n % 1000 !== 0) {
      res += `${speak(parseInt(string.slice(-3)))}`;
    }
    return res;
  }
  return "";
}

const map: Record<number, string> = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
  100: "hundred",
  1000: "thousand",
};
