//imperative way
function selectionSortImperative(array) {
  const arrLen = array.length;

  for (let i = 0; i < arrLen; i++) {
    let minIndex = i;
    let minValue = array[i];

    for (let k = i + 1; k < arrLen; k++) {
      if (array[k] < minValue) {
        minIndex = k;
        minValue = array[k];
      }
    }

    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return array;
}

function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

//I know...
function findMinNumberIndexFromCreatedSubarray(array, indexOfSub) {
  return array.indexOf(Math.min(...array.slice(indexOfSub)));
}
// more declarative way
function selectionSortDeclarative(array) {
  for (let i = 0; i < array.length; i++) {
    const minIndex = findMinNumberIndexFromCreatedSubarray(array, i);
    swap(array, i, minIndex);
  }

  return array;
}

// TEST CASE
const arr = [-1, -4, 10, 5, 30, 230, 1, 54, 0, -2, -100, 40];

const searchResultImperative = selectionSortImperative(arr);
console.log(searchResultImperative);

const searchResultDeclarative = selectionSortDeclarative(arr);
console.log(searchResultDeclarative);
