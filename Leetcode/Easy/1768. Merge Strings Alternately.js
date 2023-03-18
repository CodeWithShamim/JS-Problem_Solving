var mergeAlternately = function (word1, word2) {
  let i = 0;
  let j = 0;
  const mergeWord = [];
  while (i < word1.length || j < word2.length) {
    if (word1[i]) {
      mergeWord.push(word1[i]);
      i++;
    }
    if (word2[j]) {
      mergeWord.push(word2[j]);
      j++;
    }
  }

  return mergeWord.join("");
};

console.log(mergeAlternately("abc", "pqr"));
