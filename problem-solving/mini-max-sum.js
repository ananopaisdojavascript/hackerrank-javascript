const miniMaxSum = (arr) => {
  arr = arr.sort();
  let maxSet = arr.slice(1);
  let minSet = arr.slice(0, -1);
  const sum = arr.reduce((a, total) => a + total, 0);
  const minValue = sum - arr[arr.length - 1];
  const maxValue = sum - arr[0];
  console.log(minValue, maxValue);
}

let arr = [7, 69, 2, 221, 8974];

miniMaxSum(arr);
