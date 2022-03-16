function bubbleSort(arr) {
  let isSwapped = false;

  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length - i - 1; k++) {
      if (arr[k] > arr[k + 1]) {
        let temp = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}

// TEST CASE
const array = [100, 10, 3, 5, 20, 40, 1, 0, -3, -32, 120, 2, 6, 4, 3];
const result = bubbleSort(array);
console.log(result);
