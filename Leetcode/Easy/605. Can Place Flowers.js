var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === n) return true;
  }

  return false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
