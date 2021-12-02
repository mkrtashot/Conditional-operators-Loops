"use strict";
// Insert a number. Calculate product and sum of the digits of the number. If product is divisible by thesum, print the quotient, otherwise print the remainder.

let number = +prompt("Please enter your number");

let sumNumber = number;
let sum = "";
let sumProduct = number;
let product = "";

sum = sumNumber % 10;
sumNumber = (sumNumber - (sumNumber % 10)) / 10;

while (sumNumber) {
  let lastDigit = sumNumber % 10;
  sum = sum + lastDigit;
  sumNumber = (sumNumber - lastDigit) / 10;
}

product = sumProduct % 10;
sumProduct = (sumProduct - (sumProduct % 10)) / 10;

while (sumProduct) {
  let lastDigit = sumProduct % 10;
  product = product * lastDigit;
  sumProduct = (sumProduct - lastDigit) / 10;
}

if (number === 0) {
  console.log("Cannot calculate.");
} else if ((product / sum) % 1 === 0) {
  console.log(`‘Quotient is ${product / sum}.ʼ`);
} else {
  console.log(`Remainder is ${product % sum}.`);
}
