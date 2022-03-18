function insertionSort(arr) {
  const arrLen = arr.length;

  for (let i = 1; i < arrLen; i++) {
    for (let k = i; k > 0 && arr[k - 1] > arr[k]; k--) {
      let temp = arr[k];
      arr[k] = arr[k - 1];
      arr[k - 1] = temp;
    }
  }

  return arr;
}

const result = insertionSort(array);
console.log(result);
