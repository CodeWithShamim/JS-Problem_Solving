var isPalindrome = function (s) {
  const newStr = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  for (let i = 0, j = newStr.length - 1; i < j; ) {
    if (newStr[i] !== newStr[j]) return false;
    i++;
    j--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
