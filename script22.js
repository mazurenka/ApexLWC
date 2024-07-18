function greeting() {
  console.log("hello");
}
greeting();

const arrowGreeting = () => console.log("arrow hello");
arrowGreeting();

const sum = (data1, data2) => {
  let sum = data1 + data2 + 10;
  return sum;
};
console.log(sum(5, 5));

const refactorSum = (data1, data2) => data1 + data2 + 10;
console.log(refactorSum(5, 5));

var arr = [1, 2, 3, 4];
let newArr = arr.map((item) => item * 2);
console.log(newArr);

let obj = {
  name: "Andre",
  getName: function () {
    console.log(this.name);
  },
};
console.log(obj.getName());
