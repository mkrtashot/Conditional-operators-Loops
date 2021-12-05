"use strict";
// Given an array of strings and numbers. Print the number of integers and the number of strings in the array.

function array(arr) {
  let number = 0;
  let string = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      number++;
    } else {
      string++;
    }
  }
  console.log(`Numbers: ${number}, Strings: ${string}`);
}

arr1 = [1, 4, "i am a string", "456"];

array(arr1);
