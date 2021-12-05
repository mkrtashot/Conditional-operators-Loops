"use strict";
// Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of
//     the angles of a triangle equals 180 degrees).
//     Input Output
//     45, 90 45
//     30, 30 120
//     75, 25 80

let firstAngle = +prompt("Please enter the first angle of the triangle");
let secondAngle = +prompt("Please enter the second angle of the triangle");

let thirdAngle = 180 - firstAngle - secondAngle;

console.log(thirdAngle);
