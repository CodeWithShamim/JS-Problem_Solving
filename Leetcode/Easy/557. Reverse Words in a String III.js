var reverseWords = function (s) {
  let wordsArray = s.split(" ");

  for (let i = 0; i < wordsArray.length; i++) {
    const letterArray = wordsArray[i].split("");

    for (let j = 0, k = letterArray.length - 1; j <= k; ) {
      [letterArray[j], letterArray[k]] = [letterArray[k], letterArray[j]];
      j++;
      k--;
    }

    wordsArray[i] = letterArray.join("");
  }

  return wordsArray.join(" ");
};

console.log(reverseWords("God Ding"));
console.log(reverseWords("Let's take LeetCode contest"));
