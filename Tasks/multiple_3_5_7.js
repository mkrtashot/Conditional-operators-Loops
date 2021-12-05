"use strict";
// Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

let number = +prompt("Please enter a number");
let multiple3 = (number / 3) % 1;
let multiple5 = (number / 5) % 1;
let multiple7 = (number / 7) % 1;

if (number === 0) {
  console.log(`${number} is not a multiple of 3,5 and 7.`);
} else if (multiple3 === 0 && multiple5 === 0 && multiple7 === 0) {
  console.log(`${number} is a multiple of 3,5 and 7.`);
} else if (multiple3 === 0 && multiple5 === 0) {
  console.log(`${number} is a multiple of 3 and 5.`);
} else if (multiple3 === 0 && multiple7 === 0) {
  console.log(`${number} is a multiple of 3 and 7.`);
} else if (multiple5 === 0 && multiple7 === 0) {
  console.log(`${number} is a multiple of 5 and 7.`);
} else if (multiple3 === 0) {
  console.log(`${number} is a multiple of 3.`);
} else if (multiple5 === 0) {
  console.log(`${number} is a multiple of 5.`);
} else if (multiple7 === 0) {
  console.log(`${number} is a multiple of 7.`);
} else {
  console.log(`${number} is not a multiple of 3,5 and 7.`);
}
