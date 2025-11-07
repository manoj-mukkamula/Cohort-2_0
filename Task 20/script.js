//  PRACTICE SESSION QUESTIONS "FUNCTIONS" JS YT
// Q1. What's the difference between function declaration
//      and expression in terms of hoisting?
// Ans. Function declartion is always hoisted, 
//      while function expressions are not fully hoisted 

// Q2. Predict the output for the following: 
greet();

function greet() {
    console.log("Hello!");
}
// function declaration is hoisted so output is "Hello!"

// Q3. Convert the following function to arrow function
// function multiply(a, b) {
//     return a * b;
// }
let multiply = (a, b) => {
    return a * b;
}
console.log(multiply(3,7));

// Q4. Identify parameters and arguments from the following function
function welcome(name) {
    console.log(name);
}
welcome("Manoj");
// Ans parameter = name , argument = "Manoj" = real value

// Q5. How many parameters does this function have and 
//      how many arguments have been passed 
function demo(a, b, c){}
demo(1,2);
// 3 parameters: a,b,c & 2 arguments: 1, 2

// Q6. Predict the output
function sayHi(name = "Guest") {
    console.log("Hi", name);
}
sayHi();
// "Hi Guest",  since the default value is given

// Q7. What does the ... operator means in parameters
// Ans: ...(rest) is the operator which allots values to rest of the parameters 
// It collects all remaining arguments passed to a function into a single array.
function abcde(a,b,c, ...val){
console.log(val);
}
abcde(1,2,3,4,5,6,7);

// Q8. Use Rest operator to accept any number 
//      of scores & return the total
function scores(...val){
    let total = 0; 
    val.forEach(function (val) {
        total = total + val;
    });
    return total;
}
console.log(scores(10,2,8,6,4,3)); 

// Q9. Fix this function using early return
// function checkAge(age) {
//     if (age < 18) {
//         console.log("Too young");
//     } else {
//         console.log("Allowed");
//     }
// }
function checkAge(age){
    if (age < 18) return "Too young";
    return "Allowed";
}
console.log(checkAge(2));

// Q10. whats the return value of this function
// function f() {
//     return;
// }
//  the function is not called, if we call it, then output is undefined
//      since there is no return value in that function 

// Q11. What does it mean when we say "functions are first-class citizens"
// Ans. It means in JavaScript, functions are treated like any other variable,
//       they can be assigned, passed, or returned from other functions.

// Q12. Can you assign a function to a variable and then call it show how?
//  Yes, we can do as following
let add = function(a, b) {
    console.log(a + b);
}
add(4, 5);

// Q13. Pass a function into another function and execute it inside 
function outside(a) {
  a(); // executes the passed function
  console.log("outside function");
}
outside(function () {
  console.log("inside function");
});

// Q14. What is a higher-order-function
// Ans. A function returns another function or accept a function as a parameter
function hof(val) {
  return function hof2() {
    return "hof returning a function";
  };
}
hof(function () {
  return "hof parameter as a function";
});

// Q15. identify which is higher order function 
[1, 2, 3].map(function (x) {
    return x ** 2;
});
//  map is the higher order function since it has another function in it

// Q16. Tell whether the following is pure or impure function
let total8 = 0;
function addToTotal(num) {
    total8 += num;
}
// imprure function, since it can change "total" variable outside the function

// Q17. Convert the below function into a pure function
// let total = 0;
// function addToTotal(num) {
//     total += num;
// }
let total = 0;
function addToTotal(num) {
    let newTotal = total;
    newTotal += num;
}

// Q18. what is closure? When it is created?
// When a function's value is used in its inside function then it is closure
function demo3(){
    let value = 5;
    return function() {
        console.log("Closure", value);
    }
}
demo3()();
// A closure is created when an inner function is defined inside another
//  function and accesses variables from its parent scope.

// Q19. What would be printed in output from the following
function outer() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); // 0+1 = 1
counter(); // 1++ = 2

// Q20. Convert the following to iifee
// function init() {
//     console.log("Initialized");
// }
(function init() {
    console.log("Initialized");
})();
// use: runs code right away and hides its variables from the rest of the program

// Q21. What will be the output here and why?
// greet();
// var greet = function () {
//     console.log("Hi!");
// }; 
// TypeError, because greet is hoisted as undefined (due to var), so calling
//  it before assignment tries to execute undefined as a function.

// Q22. What will be the output here and why?
greet();
function greet() {
    console.log("Hi!");
};
// Output: Hi!, because function declarations are fully hoisted,
//  so greet() works even before its definition


//  PRACTICE QUESTIONS "FUNCTIONS" JS YT
// Q1.  Write a BMI Calculator
function bmi(weight, height) {
  let result = weight / (height * height);
  if (result < 18.5) return `BMI: ${result.toFixed(2)} -> Underweight`;
  else if (result < 25) return `BMI: ${result.toFixed(2)} -> Normal weight`;
  else if (result < 30) return `BMI: ${result.toFixed(2)} -> Overweight`;
  else return `BMI: ${result.toFixed(2)} -> Obese`;
}
console.log(bmi(75, 1.75));

// Q2. Create a resuable discount calculator
function discountCalculator(discount){
    return function(price){
        return price - ((price/100) * discount);
    }
}
let ten = discountCalculator(10);
console.log(ten(200));
let twenty = discountCalculator(20);
console.log(ten(500));

// Q3. Build a counter using closure
function counter2(){
    let count = 0; 
    return function(){
        count++;
        return count;
    }
}
let c = counter2();
console.log(c()); // runs the inner function directly still remebers the count value
console.log(c());
console.log(c());
//  the closure remembers the variable count
let d = counter2();
console.log(d()); // this d will have another copy 
console.log(c());

// Q4. Create a pure function to transform a value
function triple(value){
    return value * 3;
}
console.log(triple(20));

// Q5. Use IIFE to isolate variables
(function (){
    const password = "password";
    console.log(password); // can be accessable inside the function
})();
// console.log(password); can't be accessable outide the function

// Q6. Arrow function vs Functions
const obj = {
    value: 42,
    regular: function () { return this.value; },
    arrow: () => this.value
};
console.log(obj.regular()); //42
console.log(obj.arrow()); //undefined
// The regular function has its own this referring to obj, while the arrow function
//  doesn’t bind this and instead uses the outer (global) this, giving undefined


// PRACTICE ZONE FROM NOTES
// Q1. Create a greet function with default name
function greeting(name = "Manoj"){
    console.log(`Hello ${name}`);
}
greeting();

// Q2. Sum all numbers using rest parameter
function sumNumbers(...val){
    let total = 0;
    val.forEach(function (val) {
        total = total + val;
    });
    console.log(total);
}
sumNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5);

// Q3. Use a function to log even numbers in array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function even(numbers) {
  let evens = [];
  numbers.forEach(function (num) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  });
  return evens;
}
console.log(even(arr));

// Q4. Create a pure function to add tax
function addTax(price, taxRate) {
  return price + price * taxRate;
}
console.log(addTax(100, 0.1)); // 110

// Q5. Make a toUpperCase transformer using HOF
function toUpperCase(string){
    return function () {
        return string.toUpperCase();
    };
}
let upper = (toUpperCase("Manoj"));
console.log(upper());


// Q6. Use IIFE to show welcome message
(function end(){
    console.log(`This is the end`);
})();