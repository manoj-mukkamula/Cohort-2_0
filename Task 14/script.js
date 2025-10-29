// 1) Declare your name and city using const , and your age using let .
const name = "Manoj";
const city = "Hyderabad";
let age = 21;

// 2) Try this and observe the result:
let x = 5;
// let x =10;
// answer: This will throw an error because 'x' has already been declared using 'let'.
// so let doesn't allow redeclaration in the same scope.

// 3) Guess the output:
console.log(count);
var count = 42;
// answer: The output will be 'undefined' because of hoisting. 
// The declaration of 'count' is hoisted to the top, but its assignment happens later.

// 4) Create a const object and add a new key to it — does it work?
const student = { name: "Alice", age: 20 };
student.city = "New York";
console.log(student);
// answer: Yes, it works. The contents of a const object can be modified, 
// but the reference to the object cannot be changed.

//5) Try accessing a let variable before declaring it — what error do you see?
let m;
console.log(m);
// let m = 100;
// answer: This will throw a ReferenceError because 'm' is accessed before its declaration.

// 6) Create a const array and push a new element to it — does it work?
const rollNumbers = [2,4,7,9,12];
rollNumbers.push(15);
console.log(rollNumbers);
// answer: Yes, it works. The contents of a const array can be modified, 
// but the reference to the array cannot be changed.