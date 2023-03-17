var reverseOnlyLetters = function (s) {
  let res = [...s];
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (/[^a-zA-Z]/.test(s[i])) {
      i++;
    }
    if (/[^a-zA-Z]/.test(s[j])) {
      j--;
    }

    const temp = res[i];
    res[i] = res[j];
    res[j] = temp;
  }

  return res.join("");
};

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
console.log(reverseOnlyLetters("ab-cd"));
