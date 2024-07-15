let str = "hello, how are you?"

let check = str.includes("how")
console.log(check)   //true



let index = str.indexOf("how")
console.log(index)   //7
let index1 = str.indexOf("howwwww")
console.log(index1)   //-1  cause doesn't exist



console.log(str.startsWith("hello"))   //true



let newStr = str.slice(0, 5)
console.log(newStr)   // hello



let upper = str.toUpperCase(str)
console.log(upper)  // HELLO, HOW ARE YOU?
console.log(str)    // hello, how are you?



let searchText = "      salesforce lwc               "
console.log(searchText.trim()) // salesforce lwc (without spaces)










