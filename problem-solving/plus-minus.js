const plusMinus = (arr) => {
  const negative = [];
  const positive = [];
  const zero = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negative.push(arr[i]);
    }

    if (arr[i] > 0) {
      positive.push(arr[i]);
    }

    if (arr[i] === 0) {
      zero.push(arr[i]);
    }
  }

  const proportionalPositive = positive.length / arr.length;
  const proportionalNegative = negative.length / arr.length;
  const proportionalZero = zero.length / arr.length;
  console.log(proportionalPositive.toFixed(6));
  console.log(proportionalNegative.toFixed(6));
  console.log(proportionalZero.toFixed(6));
};

const arr = [-4, 3, -9, 0, 4, 1];

plusMinus(arr);
