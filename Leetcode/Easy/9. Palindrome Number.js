var isPalindrome = function (x) {
  let y = x.toString().split("").reverse().join("");
  return x === parseInt(y);
};

console.log(isPalindrome(-121));
