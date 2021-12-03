function array(arr) {
  let newArr = [];
  let arrFinal = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      newArr.push(arr[i]);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] % 2 !== 0) {
      arrFinal.push(newArr[i]);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] % 2 === 0) {
      arrFinal.push(newArr[i]);
    }
  }
  console.log(arrFinal);
}

arr1 = [8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3];
arr2 = [8, 8, "meh", 6];
arr3 = [null, null, 1, undefined, 5, 9, false];

array(arr1);
array(arr2);
array(arr3);
