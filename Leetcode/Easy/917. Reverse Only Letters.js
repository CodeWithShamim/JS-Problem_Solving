var reverseOnlyLetters = function (s) {
  s = s.split("");
  const regex = /[a-zA-Z]/g;

  for (let i = 0, j = s.length - 1; i < j; ) {
    if (!s[i].match(regex)) {
      i++;
      continue;
    };
    if (!s[j].match(regex)) {
      j--;
      continue;
    };

    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++;
    j--;
  }

  return s.join("");
};

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
console.log(reverseOnlyLetters("ab-cd"));
console.log(reverseOnlyLetters("7_28"));
