"use strict"

let arr1 = ["abc", "def", "ghi"];

myforEach(arr1, fun);

function fun(index, item) {
  console.log( index + ": " + item);
}

function myforEach(arr1, fun) {
  for (var i = 0; i < arr1.length; i++) {
    fun(i, arr1[i]);
  }
}
