var findDuplicate = function (nums) {
  for (i of nums) {
    nums = nums.filter((n) => n !== i);
  }
  return nums;
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
