"use strict";
// Given a number. Print “odd” if the number is odd and “even” if itʼs even.
// Input Output
// 125 “odd”
// 35 “odd”
// 20 “even”

let number = +prompt("Please enter your number");
if (number == 0) {
  console.log("0 is neither odd nor even");
} else if (number % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}
