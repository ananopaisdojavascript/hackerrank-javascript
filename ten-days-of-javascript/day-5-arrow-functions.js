const modifyArray = (nums) => {
  return nums.map((num) => {
    return num % 2 === 0 ? num * 2 : num * 3;
  });
};

const arr = [1, 2, 3, 4, 5];

modifyArray(arr);
