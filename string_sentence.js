"use strict";
// Given a sentence as a string. Split it according to space and comma and create an array consisting of
// the words of the array. The last word should not contain the last . or ! .

function strSentence(sentence) {
  let arr = sentence.split(" ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(",", "");
    arr[i] = arr[i].replace(".", "");
    arr[i] = arr[i].replace("!", "");
  }
  return arr;
}
let sent1 = "May the Force be with you.";
let sent2 = "Keep your friends close, but your enemies closer.";

console.log(strSentence(sent1));
