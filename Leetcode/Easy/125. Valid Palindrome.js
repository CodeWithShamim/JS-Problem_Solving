var isPalindrome = function (s) {
  const newStr = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let frontResult = "";
  let backResult = "";

  for (let i = 0, j = newStr.length - 1; i < j; ) {
    frontResult = frontResult + newStr[i];
    backResult = backResult + newStr[j];
    i++;
    j--;
  }

  return frontResult === backResult;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
