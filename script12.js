var arr = ["a", "b", "c"];
console.log(arr);

console.log(arr[0]); // "a"
console.log(arr[1]); // "b"

var obj = {
  name: "Andre",
  age: 15,
  "full name": "zero to hero",
};
console.log(obj.name); // "Andre"
console.log(obj.age); // 15
console.log(obj["age"]); //15
console.log(obj[0]); // undefined
console.log(obj["full name"]); // "zero to hero"
//console.log(obj.full name) // error

let greeting = "Hello everyone";
let charList = [...greeting];
console.log(charList); //["H","e","l","l","o"," ","e","v","e","r","y","o","n","e"]

let arr1 = ["google"];
let arr2 = ["amazon"];
let arr3 = [...arr1, ...arr2];
console.log(arr3); // ["google", "amazon"]

let arr4 = ["a", "b", "c"];
let arr5 = [...arr4, "d"]; // ["a", "b", "c", "d"]

let obj1 = { name: "marketo", age: 25, date: 1990 };
let obj2 = { name: "salesforce", age: 15 };
let obj3 = { ...obj1, ...obj2 };
console.log(obj3); // {name: "salesforce", age: 15, date: 1990}

var arr10 = ["x", "y", "z"];
var arr11 = [...arr10];
arr11.push("A");
console.log(arr10); // ["x", "y", "z"]
console.log(arr11); // ["x", "y", "z", "A"]

var arrObj = [{ name: "Andre" }, { name: "salesforce" }];

var arrObj1 = JSON.parse(JSON.stringify(arrObj));
arrObj1[0].name = "Andrei";
console.log(arrObj);
console.log(arrObj1);
