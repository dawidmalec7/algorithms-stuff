function binarySearch(array, target) {
    let max = array.length - 1;
    let min = 0;
    
    while (max >= min) {
      const middle = Math.floor((min + max) / 2);
      const middleEl = array[middle]
  
      if (middleEl === target) return middle;
      else if (middleEl > target) max = middle - 1
      else min = middle + 1
    }
  
    return -1;
  }
  
  // TEST CASE
  const arr = [1, 5, 7, 9, 10];
  const searchResult = binarySearch(arr, 10)
  console.log(searchResult);
  