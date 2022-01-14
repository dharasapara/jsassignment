"use strict"

let arr = [10, 20, 30];

arr.forEach((item, i) => {
  console.log(i + ' ' + item);
});

let arr1 = ["abc", "def", "ghi"];

arr1.forEach(myFunction);

function myFunction(item, index) {
  console.log( index + ": " + item);
}
