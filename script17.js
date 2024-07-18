let arr = [2, 3, 5, 7, 9, 10];

// map()
let newArray = arr.map(function (currentItem, index, array) {
  return currentItem * 2;
});
console.log(arr);
console.log(newArray);

// filter()
let filteredArr = arr.filter(function (currentItem, index, array) {
  return currentItem < 5;
});
console.log(arr);
console.log(filteredArr);

// every()
let age = [32, 33, 18, 40];
let isAllAdult = age.every(function (currentItem) {
  return currentItem <= 18;
});
console.log(isAllAdult);

//some
let ageList = [32, 33, 18, 40];
let isAllAdultList = ageList.some(function (currentItem) {
  return currentItem < 32;
});
console.log(isAllAdultList);

//sort
let names = ["John", "Andre", "Harry"];
console.log(names.sort());

//sorting of numbers
let points = [10, 15, 3, 99, 27];
let sortedPoints = points.sort(function (a, b) {
  return a - b;
});
console.log(sortedPoints);

//reduce
let num = [2, 8, 10];
let sum = num.reduce(function (total, currentItem) {
  return total + currentItem;
});
console.log(sum);

//forEach()
num.forEach(function (currentItem) {
  console.log(currentItem + 1);
});
console.log(num);
