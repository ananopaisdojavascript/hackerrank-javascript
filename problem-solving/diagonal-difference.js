const diagonalDifference = (arr) => {
  let diagonalOne = 0;
  let diagonalTwo = 0;

  for (let i = 0; i < arr.length; i++) {
    diagonalOne += arr[i][i];
    diagonalTwo += arr[i][arr.length - i - 1];
  }
  const difference = Math.abs(diagonalOne - diagonalTwo);
  return difference;
};

const someArr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]

console.log(diagonalDifference(someArr));