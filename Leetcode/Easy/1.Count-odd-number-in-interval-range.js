var countOdds = function (low, high) {
  let totalOdds = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) {
      totalOdds += 1;
    }
  }
  return totalOdds;
};

console.log(countOdds(3, 7));


// best solution ========= return Math.floor((h + 1) / 2) - Math.floor(l / 2);
