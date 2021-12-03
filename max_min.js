"use strict";
// Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sumof their lengths.

function array(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
    }
  }
  let min = arr[0].length;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1].length < min) {
      min = arr[i + 1].length;
    }
  }
  return max + min;
}
let arr1 = ["wish", "slightly", "understand", "longer", "unexpected", "heart"];
let arr2 = ["anymore", "raven", "me", "communicate"];
console.log(array(arr1));
