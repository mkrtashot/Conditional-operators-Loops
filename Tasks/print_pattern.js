"use strict";
// Print the following pattern

function number(row) {
  let str = "";
  let newLine = `
  `;
  let countExt = 1;

  for (let i = 1; i <= row; i++) {
    str += countExt;
    let countInt = countExt;

    for (let j = 1; j < i; j++) {
      if (countExt > 1) {
        let diff = row - j;
        let sum = countInt + diff;
        countInt = countInt + diff;
        str += " " + sum;
      }
    }

    str += newLine;
    countExt++;
  }
  return str;
}

console.log(number(5));
