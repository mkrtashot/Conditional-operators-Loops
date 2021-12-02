"use strict";
// Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 ..., ak =ak-1 + ak-2)

let number = +prompt("Which Fibonacci number should I print?");
let arr = [0, 1];
let result;

for (let i = 0; i <= number; i++) {
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
}
result = arr[number];

console.log(result);
