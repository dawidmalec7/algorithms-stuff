function jumpSearch(arr, target){
    const arrLen = arr.length
    const optimalJump = Math.floor(Math.sqrt(arrLen))

    let currentIndex = 0;
    let step = optimalJump;

    while(step < arrLen && arr[step] <= target){
        if(arr[step] === target) return step

        currentIndex = step;
        step += optimalJump;

        if(step > arrLen) 
            step === arrLen

    }

    for(let i = currentIndex; i < step; i++){
        if(arr[i] === target) return i;
    }

    return -1;

}

// TEST CASE
const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 55, 77, 89, 101, 201, 256, 780, 790, 800];
const searchResult = jumpSearch(arr, 800)
console.log(searchResult);
