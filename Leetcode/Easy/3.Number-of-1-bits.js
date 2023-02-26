var hammingWeight = function (n) {
  return n.toString(2).split("0").join("").length;
};

console.log(hammingWeight(00000000000000000000000000001011)); 


// var hammingWeight = function(int) {
//     const str = int.toString(2); // pass a radix parameter of 2 to keep it in base 2.
//     let count = 0;
//     for (let char of str) {
//         if (char === "1") count++;
//     }
//     return count;    
// };
