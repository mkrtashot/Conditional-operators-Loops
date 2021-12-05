"use strict";
// Insert a number. Print ‘yesʼ if the number is prime, ‘noʼ otherwise.

let number = +prompt("Please, enter a number");
let number1 = number;
let check = 0;

do {
  number1--;
  if (number === 0) {
    console.log("Neither prime nor composite");
    check++;
    break;
  } else if ((number / number1) % 1 === 0 && number1 !== 1) {
    console.log("No");
    check++;
    break;
  }
} while (number1);

if (check === 0) {
  console.log("Yes");
}
