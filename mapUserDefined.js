"use strict"

let arr = [1, 2, 3, 4, 5];

// map takes an array and function as argumentfunction

let mymap = function(arr, mapFunc) {
    const mapArr = []; // empty array
    // loop though array
    for(let i=0;i<arr.length;i++) {
      const result = mapFunc(arr[i]);
      mapArr.push(result);
    }
    return mapArr;
};

const f = (num) => num ** 2;

const squareArr2 = mymap(arr, f);

console.log(squareArr2); // prints [1, 4, 9, 16, 25]
