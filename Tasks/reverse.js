"use strict";
// Enter a number. Reverse its first and last digits. Print the new number.

let number = +prompt("Please, enter a number");
let lastDigit;
let result = "";

while (number) {
  lastDigit = number % 10;
  number = (number - lastDigit) / 10;
  result = "" + result + lastDigit;
}

console.log(result);
