"use strict";
// Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the numbers in a separate array. Arrange them such as from the beginning are the odds and from the ending the evens.

function array(arr) {
  let newArr = [];
  let arrFinal = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      newArr.push(arr[i]);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] % 2 !== 0) {
      arrFinal.push(newArr[i]);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] % 2 === 0) {
      arrFinal.push(newArr[i]);
    }
  }
  console.log(arrFinal);
}

let arr1 = [8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3];
let arr2 = [8, 8, "meh", 6];
let arr3 = [null, null, 1, undefined, 5, 9, false];

array(arr1);
array(arr2);
array(arr3);
