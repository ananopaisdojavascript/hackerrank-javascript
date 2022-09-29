const birthdayCakeCandles = (arr) => {
  let max = arr.reduce((a, b) => Math.max(a, b));
  return arr.filter((x) => x == max).length;
};

let arr = [3, 2, 1, 3];

console.log(birthdayCakeCandles(arr));
