/*
const ages = [32, 33, 16, 40];

document.getElementById("demo").innerHTML = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
*/

const ages = [32, 33, 16, 40];

document.getElementById("demo").innerHTML = myfilter(ages, checkAdult);

function myfilter(ages, checkAdult) {
  // let res = [];
  for (var i = 0; i < ages.length; i++) {
    console.log(checkAdult(ages[i]));
  }
}

function checkAdult(age) {
  return age >= 18;
}
