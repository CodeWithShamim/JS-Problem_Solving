var flipAndInvertImage = function (image) {
  const res = [];
  for (let i = 0; i < image.length; i++) {
    const arr2 = [];
    for (let j = image[i].length - 1; j >= 0; j--) {
      arr2.push(image[i][j] === 0 ? 1 : 0);
    }
    res.push(arr2);
  }

  return res;
};

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
