var arraySign = function (nums) {
  let ans = 1;
  for (i of nums) {
    if (i === 0) return 0;
    else if (i < 0) ans = -ans;
  }
  return ans;
};

console.log(arraySign([-1,2,3,-4,-3,-2,1]));
