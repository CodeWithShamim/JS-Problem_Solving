var reverse = function (x) {
  x = x.toString().split("");
  let reverseArray = [];
  let res = [];
  for (let i = 0; i < x.length; i++) {
    if (parseInt(x[i], 10) < 2147483647) {
      reverseArray.push(x[i]);
    }
  }

  let lng = reverseArray.length - 1;

  for (let i = 0; i < x.length; i++) {
    if (!reverseArray.includes(x[i])) {
      res.push(x[i]);
    } else {
      res.push(reverseArray[lng]);
      lng--;
    }
  }

  return res.join("");
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
