"use strict";
// Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If
// the last digit of the inserted number is 0, number remains the same.

let number = +prompt("Please enter a number");
let result = "";
let numberLastDigit;
let check = 0;

for (; number; ) {
  numberLastDigit = number % 10;
  if (numberLastDigit === 0 && check === 0) {
    result = number;
    check++;
    break;
  }
  number = (number - numberLastDigit) / 10;
  result = "" + result + numberLastDigit;
  check++;
}

console.log(result);
