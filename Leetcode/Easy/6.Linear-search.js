const linearSearch = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) return i;
  }
  return `Result not found for this ${key} key`;
};

console.log(linearSearch([2, 3, 1, 4, 33], 2));
