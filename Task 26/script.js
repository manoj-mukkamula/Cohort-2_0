// Self Task - Practice Questions from chatgpt SELF TASK
// 🟢 EASY LEVEL (Basics & Parameters)
// Q1. Create a function `welcome(name = "Guest")` that prints a welcome message.
//     Use a default parameter and call it with & without passing a name.
function welcome(name = "Guest") {
  console.log(`Welcome ${name}`);
}
welcome(); // without an argument
welcome("Manoj"); // with a real name

// Q2. Write a function `sum(a, b)` that takes 2 required parameters and returns the sum.
//     Print the returned value.
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 7));

// Q3. Create a function `describeUser({name, age})` using object destructured parameters.
//     It should print: "Name: <name>, Age: <age>".
function describeUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
describeUser({ name: "Manoj", age: 21 });


// 🟡 MEDIUM LEVEL (Rest, Spread, Expressions, Arrow)
// Q4. Write a function `addAll(...nums)` using rest parameters
//     that returns the total of all numbers passed.

function addAll(...nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}
console.log(addAll(50, 5, 5));

// Q5. Convert the above `addAll` into a **function expression** and test it again.
let sum2 = (...nums) => {
  let total = 0;
  for (let n of nums) total += n;
  return total;
};
console.log(sum2(50, 5, 5));

// Q6. Create an **arrow function** `applyGST(amount, gst = 0.18)`
//     that returns the final price after GST using a default parameter.
let applyGST = (amount, gst = 0.18) => amount + amount * gst;
console.log(`Final Price after GST is: ${applyGST(100)}`);

// Q7. Write a function `findMax(a, b, c)` but call it using an array and the spread operator.
//     Example: let arr = [10, 20, 7]; findMax(...arr);
let findMax = (...arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
};
console.log(findMax(1, 6, 4, 7, 4, 13));


// 🔴 HARD LEVEL (Hoisting, Scope Chain, HOF, IIFE – beginner-friendly)
// Q8. Create an example showing that function declarations are hoisted
//     but function expressions are not. Print console outputs to prove it.
hoist(); // Works: function declarations are fully hoisted
function hoist() {
  console.log("This is the hoisted function declaration");
}
// hoist2(); // ReferenceError: function expressions are NOT hoisted
// Function Expression → Only declared, not initialized before use
let hoist2 = () => {
  console.log("This is the hoisted function expression");
};

// Q9. Write a nested function `outer()` containing `inner()`.
//     inner() should access a variable from outer() and print it.
function outer() {
  let name = "Manoj Mukkamula";
  // inner function accessing outer scope variable (lexical scope)
  let inner = () => name;
  console.log(inner()); // prints value from parent scope
}
outer();

// Q10. Write a Higher-Order Function `operate(a, b, callback)`
//      that performs an operation (add/sub/multiply) based on the callback passed.
//      Call it with at least two different callback functions.
function operate(a, b, callback) {
  return callback(a, b); // HOF executes the callback
}
let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
console.log(operate(8, 4, add));
console.log(operate(8, 4, sub));
console.log(operate(8, 4, mul));


// Extra Questions to cover all topics
// Q11. Create an IIFE that prints "App Started" as soon as the program runs.
//       (Covers: IIFE – Immediately Invoked Function Expression)
(function appStarted() {
  console.log(`App Started`);
})();

// Q12. Write an anonymous function and store it in a variable `greet`.
//       Then call it with your name.
let greet = function (name) {
  console.log(`Your name is: ${name}`);
};
greet("Manoj");

// Q13. Demonstrate first-class functions by storing a function in an array
//       and calling it from the array.
let arr = [1, 2, () => 3];
console.log(arr[2]()); // calls the function

// Q14. Write a function `mergeObjects(obj1, obj2)`
//       that returns a new object containing both using the spread operator.
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
console.log(mergeObjects({ name: "Manoj" }, { age: 21 }));

