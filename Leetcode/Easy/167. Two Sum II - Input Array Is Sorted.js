var twoSum = function (numbers, target) {
  let a = 0;
  let b = numbers.length - 1;
  while (a <= b) {
    const sum = numbers[a] + numbers[b];
    if (sum === target) return [a + 1, b + 1];
    else if (sum > target) b--;
    else a++;
  }

  return [-1, -1];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([-1, 0], -1));
