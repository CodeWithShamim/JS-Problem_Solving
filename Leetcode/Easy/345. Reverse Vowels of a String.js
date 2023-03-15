var reverseVowels = function (s) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelArray = [];
  for (let x of s) {
    if (vowels.includes(x.toLowerCase())) {
      vowelArray.push(x);
    }
  }

  let i = vowelArray.length - 1;
  let res = "";
  for (let x of s) {
    if (vowels.includes(x.toLowerCase())) {
      res += vowelArray[i];
      i--;
    } else {
      res += x;
    }
  }
  return res;
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
