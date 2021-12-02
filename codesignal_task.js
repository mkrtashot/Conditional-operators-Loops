// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function solution(year) {
  let year2Digit = (year - (year % 100)) / 100;

  if (year % 100 == 0) {
    return year2Digit;
  }

  return year2Digit + 1;
}
