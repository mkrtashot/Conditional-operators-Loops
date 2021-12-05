"use strict";
// Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the words from the array.
function sentence(sentnc, words) {
  sentnc = sentnc.split("");
  for (let i = 0; i < words.length; i++) {
    for (let d = 0; d < sentnc.length; d++) {
      if (sentnc[d] === "_") {
        sentnc[d] = sentnc[d].replace("_", words[i]);
        break;
      }
    }
  }
  return sentnc.join("");
}

let arr1 = ["Houston", "problem"];
let sentence1 = "_, we have a _.";

let arr2 = ["first", "succeed", "again"];
let sentence2 = `If at _ you don't _, try, try _.`;

let arr3 = ["Force", "be", "with", "you"];
let sentence3 = `May the _ _ _ _`;

console.log(sentence(sentence3, arr3));
