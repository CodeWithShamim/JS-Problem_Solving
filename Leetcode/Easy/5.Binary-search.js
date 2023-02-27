var search = function (nums, target) {
  const sortedArray = nums.sort((a, b) => a - b);
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const midValue = sortedArray[mid];

    if (target === midValue) return nums.indexOf(midValue);
    else if (midValue > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

console.log(search([1, 2, 3, 4], 1));
