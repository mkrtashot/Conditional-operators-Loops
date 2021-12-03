"use strict";
// Given an array of numbers and a number. Find the index of a first element which is equal to that
// number. If there is not such a number, that find the index of the first element which is the closest to it.

function findingIndex(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      return i;
    }
  }
  for (let d = 1; ; d++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] + d === number) {
        return i;
      } else if (arr[i] - d === number) {
        return i;
      }
    }
  }
}
