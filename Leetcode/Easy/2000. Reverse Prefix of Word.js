var reversePrefix = function (word, ch) {
  let target = 0;
  let res = "";

  for (let k = 0; k < word.length; k++) {
    if (word[k] === ch) {
      target = k;
      break;
    }
  }

  if (!target) return word;

  for (let i = target; i >= 0; i--) {
    res = res + word[i];
  }

  return res + word.slice(target + 1);
};

console.log(reversePrefix("abcdefd", "d"));
// console.log(reversePrefix("xyxzxe", "z"));
