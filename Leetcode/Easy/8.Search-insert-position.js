var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) r = mid - 1;
    else l = mid + 1;
  }

  return [...nums, target].sort((a, b) => a - b).indexOf(target);
};

console.log(searchInsert([1, 2, 3, 4, 5], 9));
