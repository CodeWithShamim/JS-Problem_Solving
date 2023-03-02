var missingNumber = function (nums) {
  const sNums = nums.sort((a, b) => a - b);
  if (sNums[0] === 1) return 0;

  for (let i = 0; i < nums.length; i++) {
    if (sNums[i] !== sNums[i + 1] - 1) {
      return sNums[i] + 1;
    }
  }
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([1, 2]));

// var missingNumber = function(nums) {
//     const n = nums.length;

//     const expectedSum = (n * (n + 1)) / 2;
//     const actualSum = nums.reduce((sum, num) => sum + num, 0);

//     return expectedSum - actualSum;
//   }
