var average = function (salary) {
  let totalSalary = 0;
  let employNumber = 0;

  const minSalary = Math.min(...salary);
  const maxSalary = Math.max(...salary);

  for (let i = 0; i < salary.length; i++) {
    if (salary[i] !== minSalary && salary[i] !== maxSalary) {
      totalSalary += salary[i];
      employNumber++;
    }
  }

  return totalSalary / employNumber;
};

console.log(average([8000, 9000, 2000, 3000, 6000, 1000]));

// var average = function(salary) {
//    let sort = salary.sort(function(a ,b){return a - b})
//    sort.shift();
//    sort.pop();
//    return salary.reduce((a, b) => a + b, 0) / salary.length
// };
