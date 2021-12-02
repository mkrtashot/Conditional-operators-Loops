"use strict";
// Find the sign of product of three numbers without multiplication operator. Display the specified sign.

let number1 = +prompt("Please enter a number #1");
let number2 = +prompt("Please enter a number #2");
let number3 = +prompt("Please enter a number #3");

if (number1 === 0 || number2 === 0 || number3 === 0) {
  console.log("unsigned");
} else if (number1 < 0 && number2 < 0 && number3 < 0) {
  console.log("-");
} else if (
  (number1 < 0 && number2 < 0) ||
  (number1 < 0 && number3 < 0) ||
  (number2 < 0 && number3 < 0)
) {
  console.log("+");
} else if (number1 < 0 || number2 < 0 || number3 < 0) {
  console.log("-");
} else {
  console.log("+");
}
