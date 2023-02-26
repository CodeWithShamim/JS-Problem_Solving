var subtractProductAndSum = function (n) {
  // const numArray = n.toString().split("").map(Number);
  const numArray = String(n);
  let product = 1;
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += Number(numArray[i]);
    product *= Number(numArray[i]);
  }
  return product - sum;
};

console.log(subtractProductAndSum(234));
