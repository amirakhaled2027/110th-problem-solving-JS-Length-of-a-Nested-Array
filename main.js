//Write a function that returns the total number of non-nested items in a nested array.

function getLength(arr) {
    let singleNums = arr.flat(10);
    return singleNums.length;

}

console.log(getLength([1, [2, 3]]));
console.log(getLength([1, [2, [3, 4]]]));
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));
console.log(getLength([1, [2], 1, [2], 1]));
