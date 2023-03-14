var isPerfectSquare = function (a) {
  let x, x1 = a / 2;

  while (x !== x1) {
    x = x1;
    x1 = (x + a / x) / 2;
  }

  if (Number.isInteger(x)) return true;
  return false;
};

console.log(isPerfectSquare([16]));