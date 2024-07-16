let obj = {
    name: "salesforce",
    age: 21,
    date: "03.08.1982"
}

// Object keys
console.log(Object.keys(obj))  // ["name", "age", "date"]

// Object values
console.log(Object.values(obj))  // ["salesforce", 21, "03.08.1982"]

//JSON stringify
let str = JSON.stringify(obj)
console.log(str)  //{"name":"salesforce","age":21,"date":"03.08.1982"}

//JSON parse
console.log(JSON.parse(str))  //{name: 'salesforce', age: 21, date: '03.08.1982'}




