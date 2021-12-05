# Tasks

```
Code Requirement List
```

## Required Tasks

1. for vs for-in

```
Write and do all the tasks from Literature Section
try to write a the following loop with while and do-while:
```

```
for (var i = 0 ; i < a.length; i++) {
console.log("for", i, a[i]);
}
```

Here is the [solution](./tasks/for_vs_for-in.js)

```
. Given a number. Print “odd” if the number is odd and “even” if itʼs even.
Input Output
125 “odd”
35 “odd”
20 “even”
. Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of
the angles of a triangle equals 180 degrees).
Input Output
45, 90 45
30, 30 120
75, 25 80
. Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If
the last digit of the inserted number is 0, number remains the same.
Input Output
367 736
1002 2100
250 250
8 8
```

Here is the [solution](.tasks/odd_or_even.js)

. Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

```
Input Output
21 “21 is a multiple of 3 and 7.”
35 “35 is a multiple of 5 and 7.“
13 “13 is not a multiple of 3, 5 or 7.”
420 “420 is a multiple of 3, 5 and 7.”
24 “24 is a multiple of 3.”
```

Here is the [solution](Tasks\multiple_3_5_7.js)

. Given three numbers. Sort them by the ascending order.

```
Input Output
45 , 26, 78 26, 45, 78
-23, -456, 0 -456, -23, 0
```

Here is the [solution](Tasks\ascending_order.js)

. Find the sign of product of three numbers without multiplication operator. Display the specified sign.

```
Input Output
-14, 5, 0 “unsigned”
-8, 9, -6 “+”
4, 19, -2 “-”
```

Here is the [solution](Tasks\sign_of_numbers.js)

. Insert a digit and a number. Check whether the digits contains in the number or not.

```
Input Output
5, 2463 ‘Noʼ
4, 6 ‘Noʼ
8, 45689 ‘Yesʼ
```

Here is the [solution](Tasks\number_contains_digit.js)

. Enter a number. Reverse its first and last digits. Print the new number.

```
Input Output
2 2
13 31
895796 695798
```

Here is the [solution](Tasks\reverse.js)

. Insert a number. Print ‘yesʼ if the number is prime, ‘noʼ otherwise.

```
Input Output
```

```
Input Output
401 ‘yesʼ
63 ‘noʼ
```

Here is the [solution](Tasks\prime.js)

. Given a number n ( n >= 0 ). Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 ..., ak =
ak- 1 + ak- 2 )

```
| Input | Output |
| --- | ----------- |
| 0 | 0 |
| 2 | 1 |
| 10 | 55 |
| 20 | 6765 |
```

Here is the [solution](Tasks\fibonacci.js)

. Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the
sum, print the quotient, otherwise print the remainder.
Input Output
1233 ‘Quotient is 2.ʼ
5 ‘Quotient is 1.ʼ
0 ‘Cannot calculate.ʼ
455 ‘Remainder is 2.ʼ

Here is the [solution](Tasks\product_sum.js)

. Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the
words from the array.
Input Output
“_, we have a _.” [“Houston”, “problem”] “Houston, we have a problem.”
“If at _ you donʼt _, try, try _.” [“first”, “succeed”,
“again”]

```
“If at first you donʼt succeed, try, try
again.”
“May the _ _ _ _.” [“Force”, “be”, “with”, “you”] “May the Force be with you.”
```

Here is the [solution](Tasks\sentence.js)

. Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the
numbers in a separate array. Arrange them such as from the beginning are the odds and from the
ending the evens.
Input Output
[8, 0, 1, ‘heyʼ, 12, 5 , true, ‘2ʼ, null, 7, 3] [1, 5, 7, 3, 8, 0, 12]
[8, 8, ‘mehʼ, 6] [8, 8, 6]

```
Input Output
[null, null, 1, undefined, 5, 9, false] [1, 5, 9]
```

Here is the [solution](Tasks\arr_odd_even.js)

. Given an array of strings and numbers. Print the number of integers and the number of strings in the
array.
Input Output
[1, ‘10ʼ, ‘hiʼ, 2, 3] “Numbers: 3, Strings: 2”
[1, 4, ‘i am a stringʼ, ‘456ʼ] “Numbers: 2, Strings: 2”

Here is the [solution](Tasks\strings_numbers.js)

. Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum
of their lengths.
Input Output
[“anymore”, “raven”, “me”, “communicate”] 13
[“wish”, “slightly”, “understand”, “longer”, “unexpected”, “heart”] 14

Here is the [solution](Tasks\max_min.js)

. Given an array of numbers and a number. Find the index of a first element which is equal to that
number. If there is not such a number, that find the index of the first element which is the closest to it.
Input Output
[21, -9, 15, 2116, -71, 33], -71 4
[ 36, -12, 47, -58, 148, -55, -19, 10], -56 5
[5, 46, 17, -2, 89, 0, 26 ] 36 1

Here is the [solution](Tasks\arr_num_num.js)

. Given a sentence as a string. Split it according to space and comma and create an array consisting of
the words of the array. The last word should not contain the last. or!.
Input Output
“May the Force be with you.” [“May”, “the”, “Force”, “be”, “with”, “you”]
“Keep your friends close, but your
enemies closer.”

```
[“Keep”, “your”, “friends”, “close”, “but”, “your”,
“enemies”, “closer”]
```

Here is the [solution](Tasks\string_sentence.js)

. Given an array of a size smaller than 100. It consists of numbers from 0 to 99 in any order. Create a
new array where each element from that array is placed under the index of its value. Start from the
smallest value and end with the biggest one. If there are missing values, put in its places undefined.

```
| Input | Output |
| --------- | ----------- |
| [4, 3, 0, 9] | [0, undefined, undefined, 3, 4, undefined, undefined,
undefined, undefined, 9] |
```

```
| [26, 30, 19, 5] | [5, undefined x 13, 19, undefined x 4, 26,
undefined x 3 ] |
```

_undefined x 13 - means undefined 13 times._

Here is the [solution](Tasks\array_number.js)

```


. Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
row and print them as an array.
Input Output
[[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]] [12, 1, 13, 15]
[[8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0,-1]] [45, 8, 0, -6]
[[1], [2], [3], [4]] [1, 2, 3, 4]
. Print the following pattern:
1
2 6
3 7 10
4 8 11 13
5 9 12 14 15
```

Here is the [solution](Tasks\print_pattern.js)
