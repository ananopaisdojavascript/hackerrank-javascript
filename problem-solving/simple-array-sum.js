const simpleArraySum = (ar) => {
  return ar.reduce((acc, num) => acc + num, 0);
};

const sum = [1, 2, 3, 4, 10, 11];
console.log(simpleArraySum(sum));
