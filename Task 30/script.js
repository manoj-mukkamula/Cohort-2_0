// TASK 29 JS PRACTICE QUESTIONS EASY


// 🟡 Level 2 – Functional Thinking & Logic Tasks (Intermediate)

// Q1. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue).
let obj = {
  name: "Manoj",
  normal() {
    console.log(this);
  },
  arrow: () => {
    console.log(this);
  },
};
obj.normal(); //  here "this" refers to the object that calls it.
obj.arrow(); // here "this" does NOT refer to the object, it uses global/outer "this".

// Q2. Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.
// freeze = no add, no delete, no modify
// seal = only modify allowed
//  Freeze
let user = { name: "Manoj", age: 21, password: "manoj" };
Object.freeze(user);
user.name = "L"; // no change
user.username = "Manoj123"; // cannot add
delete user.age; // cannot delete
console.log("Freeze:", user);

// Seal
let user2 = { name: "Manoj", age: 21, password: "manoj" };
Object.seal(user2);
user2.name = "L"; // modify allowed
user2.username = "Manoj123"; // cannot add
delete user2.age; // cannot delete
console.log("Seal:", user2);



// 🟢 EASY LEVEL (Truthy, Ternary, Array Basics)

// Q1. Write a program that checks if a given value is truthy or falsy and prints "Truthy" or "Falsy".
// let value = prompt("Enter a value");
// if (
//   value === "" ||
//   value === "0" ||
//   value === "null" ||
//   value === "undefined"
// ) {
//   console.log("Falsy Value");
// } else {
//   console.log("Truthy Value");
// }

// Q2. Using a ternary operator, check if a number is even or odd.
// let num = +prompt("Enter a number");
// console.log(num % 2 === 0 ? "Even number" : "Odd number");

// Q3. Given let nums = [10, 20, 30, 40], print the second and last elements.
let nums = [10, 20, 30, 40];
console.log("2nd element:", nums[1]);
console.log("Last element:", nums[nums.length - 1]);



// 🟡 MEDIUM LEVEL (Switch, Loops, Hoisting, Array Processing)

// Q4. Take a grade input (A, B, C, D, F) and print a message using switch:
// A → Excellent, B → Good, C → Average, Others → Poor.
let grade = "A";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  case "D":
    console.log("Poor");
    break;
  case "F":
    console.log("Fail");
    break;
  default:
    console.log("Invalid Input");
}

// Q5. Write a program that finds the sum of digits of a number.
let number = 455;
let sum = 0;

while (number > 0) {
  sum += number % 10;
  number = Math.floor(number / 10);
}

console.log(sum);

// Q6. Predict the output and reason:
// sayHello();
// var sayHello = function () { console.log("Hi"); };

// Output: TypeError: sayHello is not a function
// Reason: var is hoisted only as undefined, and function expressions are not hoisted.

// Q7. Given an array of marks, create a new array containing only marks greater than 50 (without using filter).
let marks = [99, 45, 36, 75, 89, 92, 61];
let newMarks = [];
for (let i = 0; i < marks.length; i++) {
  if (marks[i] > 50) {
    newMarks.push(marks[i]);
  }
}
console.log("Old Marks :", marks);
console.log("Marks > 50 :", newMarks);



// 🔴 HARD LEVEL (Patterns, Objects, Prime Function)

// Q8. Print this pattern using nested loops:
// *
// **
// ***
// ****
for (let i = 1; i <= 4; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

// Q9. Create an object emp with name, age, and salaries (array of 3 months).
// Print the total earnings using a loop.
let emp = {
  name: "Ambani",
  age: 21,
  salaries: [1000, 5000, 4000],
};
let total = 0;
for (let i = 0; i < emp.salaries.length; i++) {
  total += emp.salaries[i];
}
console.log("Total 3 months salary is: ", total);

// Q10. Write a function isPrime(n) that returns true if the number is prime, else false.
// Call it for 5 test values.
function isPrime(n) {
  let prime = true;

  if (n < 2) {
    console.log("Not a prime");
  } else if (n === 2) {
    console.log("2 is a prime number");
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        prime = false;
        break;
      }
    }
    console.log(prime ? `${n} is a prime number` : "Not a prime");
  }
}

isPrime(61);
isPrime(11);
isPrime(33);
isPrime(111);
isPrime(1717);
