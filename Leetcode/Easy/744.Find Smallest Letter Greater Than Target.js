var nextGreatestLetter = function (letters, target) {
  if (letters[0] > target || target >= letters[letters.length - 1]) {
    return letters[0];
  }

  let start = 0;
  let end = letters.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (target === letters[mid]) {
      for (let i = mid; i < end; i++) {
        if (letters[i] !== letters[i + 1]) {
          return letters[i + 1];
        }
      }
      return letters[mid + 1];
    } else if (letters[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  if (letters[mid] < target) return letters[mid + 1];
  return letters[mid];
};

console.log(nextGreatestLetter(["c", "f", "j"], "z"));
console.log(nextGreatestLetter(["e", "e", "e", "k", "q", "q", "q", "v", "v", "y"], "y"));
