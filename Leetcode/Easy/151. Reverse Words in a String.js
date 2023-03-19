var reverseWords = function (s) {
  const arrOfWords = s.split(" ");
  let res = "";

  for (let i = arrOfWords.length - 1; i >= 0; i--) {
    if (arrOfWords[i]) res = res + arrOfWords[i] + " ";
  }

  return res.trim();
};

console.log(reverseWords("a good   example"));
