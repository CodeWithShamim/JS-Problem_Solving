var twoSum = function (nums, target) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    var n = nums[i];

    if (map[target - n] >= 0) {
      return [map[target - n], i];
    } else {
      map[n] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
