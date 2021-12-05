"use strict";
// Given an array of a size smaller than 100. It consists of numbers from 0 to 99 in any order. Create a
// new array where each element from that array is placed under the index of its value. Start from the
// smallest value and end with the biggest one. If there are missing values, put in its places undefined.

function newArr(arr) {
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    finalArr[arr[i]] = arr[i];
  }
  for (let i = 0; i < finalArr.length; i++) {
    if (typeof finalArr[i] === "undefined") {
      finalArr[i] = undefined;
    }
  }
  return finalArr;
}
console.log(newArr([]));
