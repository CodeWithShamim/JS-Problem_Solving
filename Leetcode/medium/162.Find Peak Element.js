var peakIndexInMountainArray = function (arr) {
    let start = 0;
    let end = arr.length - 1;
    let mid;
  
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
  
      if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) return mid;
      else if (arr[mid] < arr[mid + 1]) start = mid + 1;
      else end = mid - 1;
    }
  
    return mid;
  };
  
  console.log(peakIndexInMountainArray([1,2,3,1]));
  console.log(peakIndexInMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 10, 5, 2]));
  