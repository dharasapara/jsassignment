"use strict"

let arr = [10, 20, 25, 36];

let res1 = arr.map(Math.sqrt);
console.log(res1);

let res2 = arr.map(mulByTen);

function mulByTen(val) {
  return val * 10;
}
console.log(res2);

let objArr = [
  {fName: 1, lName: 'dhara'},
  {fName: 2, lName: 'tara'},
  {fName: 3, lName: 'sharara'}
];

let res3 = objArr.map(mergeName);

function mergeName(name) {
  return name.fName + ' ' + name.lName + ' ';
}

/*
function mergeName(name) {
  return [name.fName, name.lName].join(" ");
}
*/

console.log(res3);
