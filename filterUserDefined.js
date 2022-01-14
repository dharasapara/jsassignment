"use strict"

/*
const ages = [32, 33, 16, 40];

document.getElementById("demo").innerHTML = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
*/

const ages = [32, 33, 16, 40];

document.getElementById("demo").innerHTML = myfilter(ages);

function myfilter(ages) {
  let res = [];
  for (var i = 0; i < ages.length; i++) {
      if(checkAdult(ages[i]))
        res.push(ages[i]);
  }
  return res;
}

function checkAdult(age) {
  return age >= 18;
}
