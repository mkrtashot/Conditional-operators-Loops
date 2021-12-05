"use strict";
// Given three numbers. Sort them by the ascending order.

let number1 = +prompt("Please enter a number #1");
let number2 = +prompt("Please enter a number #2");
let number3 = +prompt("Please enter a number #3");

if (number1 > number2 && number1 > number3) {
  if (number2 > number3) {
    console.log(number3, number2, number1);
  } else {
    console.log(number2, number3, number1);
  }
} else if (number2 > number1 && number2 > number3) {
  if (number1 > number3) {
    console.log(number3, number1, number2);
  } else {
    console.log(number1, number3, number2);
  }
} else if (number3 > number1 && number3 > number2) {
  if (number1 > number2) {
    console.log(number2, number1, number3);
  } else {
    console.log(number1, number2, number3);
  }
} else if (number1 === number2 && number1 === number3) {
  console.log(number1, number2, number3);
} else if (number1 > number2 && number1 === number3) {
  console.log(number2, number3, number1);
} else if (number1 < number2 && number1 === number3) {
  console.log(number3, number1, number2);
} else if (number1 > number3 && number1 === number2) {
  console.log(number3, number2, number1);
} else if (number1 < number3 && number1 === number2) {
  console.log(number2, number1, number3);
} else if (number1 > number2 && number2 === number3) {
  console.log(number2, number3, number1);
} else if (number1 < number2 && number2 === number3) {
  console.log(number1, number3, number2);
}
