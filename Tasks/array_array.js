"use strict";
// Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
// row and print them as an array.

function arr(dimArr) {
  let newArr = [];
  for (let i = 0; i < dimArr.length; i++) {
    let result = 0;
    for (let d = 0; d < dimArr[i].length; d++) {
      result += dimArr[i][d];
    }
    newArr.push(result);
  }
  return newArr;
}

console.log(arr([]));
