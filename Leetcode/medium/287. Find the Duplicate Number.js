var findDuplicate = function (nums) {
  const newNums = [...new Set(nums)];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== newNums[i]) return nums[i];
  }
};

console.log(findDuplicate([1, 3, 4, 2]));
