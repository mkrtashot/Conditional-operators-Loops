"use strict";
// Insert a digit and a number. Check whether the digits contains in the number or not.

let digit = +prompt("Insert a digit");
let number = +prompt("Insert a number");
let lastDigit;
let check = 0;

while (number) {
  lastDigit = number % 10;
  if (lastDigit === digit) {
    console.log("Yes");
    check++;
  }
  number = (number - (number % 10)) / 10;
}

if (check === 0) {
  console.log("No");
}
