export const sum = (numbers: number[]) => {
  return numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

export const product = (numbers: number[]) => {
  return numbers.reduce((acc, curr) => {
    return acc * curr;
  }, 1);
};
