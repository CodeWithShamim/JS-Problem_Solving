var missingNumber = function (nums) {
  let sum1 = 0;
  for (let i = 0; i <= nums.length; i++) {
    sum1 = sum1 + i;
  }

  let sum2 = 0;
  for (let i = 0; i < nums.length; i++) {
    sum2 = sum2 + nums[i];
  }

  return sum1 - sum2;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([1, 2]));

// var missingNumber = function(nums) {
//     const n = nums.length;

//     const expectedSum = (n * (n + 1)) / 2;
//     const actualSum = nums.reduce((sum, num) => sum + num, 0);

//     return expectedSum - actualSum;
//   }
