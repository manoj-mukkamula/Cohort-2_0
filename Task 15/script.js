//  Day 26 Practice: 
// Variables: values can be changed
let a;
let b = 12;
var c = "Hello";
a = 5;
b = b + 3; 
c=  "hello world";

// Constants: values cannot be changed
const pie = 3.14;
const name  = "Manoj";
// pie = 3.14159; // This will cause an error
// name = "kumar"; // This will cause an error

// using console
// Displaying the values
console.log("Value of a:", a);
console.log("Value of b:", b);
// console error: gives errors 
console.error("This is an error message.");
//  console warning: gives warnings
console.warn("This is a warning message.");

// string methods
let character = "Rock Lee";
// slice
console.log(character.slice(5)); // "Lee"
// template literals
console.log(`Character Name: ${character}`); // "Character Name: Rock Lee"




// Task 15 Practice: datatypes + type system
// 1) Predict the output:
console.log(null + 1); // 0 + 1 = 1
console.log("5" + 3); // "5" + "3" = "53"
console.log("5" - 3); // 5 - 3 = 2
console.log(true + false); // 1 + 0 = 1

// 2) Check types:
console.log(typeof []); // object because arrays are objects in JavaScript
console.log(typeof null); // object (bug in JavaScript)
console.log(typeof 123n); // bigint (n is given for bigint)

// 3) Truthy or Falsy?
console.log(Boolean(0)); // falsy
console.log(Boolean("0")); // truthy
console.log(Boolean([])); // truthy
console.log(Boolean(undefined)); // falsy

// 4) Write a function isEmpty(value) that checks if a given value is null , undefined , or ""
function isEmpty(value) {
    if (value === null) {
        console.log(`value is null`);
    }
    else if (value === undefined) {
        console.log(`value is undefined`);
    } else if (value === "") {
        console.log(`value is an empty string`);
    } else {
        console.log(`value is not empty`);
    }
}

//  5)  Compare with loose vs strict:
console.log(5 == "5"); // true because of type coercion

console.log(5 === "5"); // false because types are different
