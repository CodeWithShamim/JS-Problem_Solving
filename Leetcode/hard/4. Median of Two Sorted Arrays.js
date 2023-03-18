var findMedianSortedArrays = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  let k = 0;
  const mergeNumber = [];

  while (k < nums1.length + nums2.length) {
    if (j >= nums2.length || (i < nums1.length && nums1[i] < nums2[j])) {
      mergeNumber.push(nums1[i]);
      i++;
    } else {
      mergeNumber.push(nums2[j]);
      j++;
    }

    k++;
  }

  let middleNumber = mergeNumber.length / 2;
  let r = Math.floor(middleNumber);
  let sum = 0;

  if (Number.isInteger(middleNumber)) {
    sum = mergeNumber[r] + mergeNumber[r - 1];
  } else {
   return mergeNumber[r].toFixed(5);
  }

  return (sum / 2).toFixed(5);
};

console.log(findMedianSortedArrays([1, 3], [2]));
