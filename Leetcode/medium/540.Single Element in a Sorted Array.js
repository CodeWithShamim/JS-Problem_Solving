const singleNonDuplicate = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left < right) {
    mid = left + (right - left) / 2;
    
    if (nums[mid] == nums[mid + 1]) mid = mid - 1;
    if ((mid - left + 1) % 2 != 0) right = mid;
    else left = mid + 1;
  }
  return nums[left];
};

console.log(singleNonDuplicate([1]));
console.log(singleNonDuplicate([1, 1, 2]));
console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
