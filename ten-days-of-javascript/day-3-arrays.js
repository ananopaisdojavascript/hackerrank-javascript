const getSecondLargest = (nums) => {
    const uniqueNumbers = nums.filter((number, index) => nums.indexOf(number) === index);
    let largestNumber = 0;
    let secondLargestNumber = 0;

    for (let index = 0; index < uniqueNumbers.length; index++) {
        if(uniqueNumbers[index] >= largestNumber) {
            secondLargestNumber = largestNumber;
            largestNumber = uniqueNumbers[index];
        } else if (uniqueNumbers[index] > secondLargestNumber) {
            secondLargestNumber = uniqueNumbers[index];
        }
    }
    return secondLargestNumber;
} 

const num = [2, 3, 6, 6, 5];
console.log(getSecondLargest(num));