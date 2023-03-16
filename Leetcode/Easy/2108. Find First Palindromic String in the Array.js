var isPalindrome = function (newStr) {
  for (let i = 0, j = newStr.length - 1; i < j; ) {
    if (newStr[i] !== newStr[j]) return false;
    i++;
    j--;
  }

  return true;
};

var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) {
      return words[i];
    }
  }

  return "";
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
