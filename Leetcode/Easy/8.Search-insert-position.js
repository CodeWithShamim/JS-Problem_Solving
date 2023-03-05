var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let mid;
  mid = Math.floor((l + r) / 2);

  while (l < r) {
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) r = mid;
    else l = mid + 1;

    mid = Math.floor((l + r) / 2);
  }

  if (nums[mid] < target) return mid + 1;
  return mid;
};

console.log(searchInsert([1, 3, 5, 6], 7));
