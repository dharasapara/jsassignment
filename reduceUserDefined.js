"use strict"

/*
let numbers = [175, 50, 25];
document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
*/

let numbers = [175, 50, 25];
document.getElementById("demo").innerHTML = myreduce(numbers);

function myreduce(arr) {
  let res = 0;
  for (var i = 0; i < arr.length; i++) {
    res = myFunc(res, arr[i]);
  }
  return res;
}

function myFunc(total, num) {
  return total + num;
}
