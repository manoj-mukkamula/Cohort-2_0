// Self Task - Practice Questions from chatgpt
// 🟢 EASY LEVEL (Basics & Conditionals)
// Q1. Write a program that takes a number as input and prints whether it’s positive, negative, or zero.
// let input = +prompt("Enter a number");
// if (input > 0) {
//   console.log(`${input} is a positive number`);
// } else if (input < 0) {
//   console.log(`${input} is a negative number`);
// } else if (input === 0) {
//   console.log(`You have entered zero`);
// } else {
//   console.log("Invalid Input");
// }

// Q2. Ask the user for a number and print whether it’s even or odd using the modulus operator (%).
// let num = +prompt("Enter a number");
// if (isNaN(num)) {
//   console.log("Invalid Input");
// } else if (num % 2 === 0) {
//   console.log(`${num} is an even number`);
// } else {
//   console.log(`${num} is an odd number`);
// }

// Q3. Ask two numbers and an operator (+, -, *, /) from the user and print the result using if-else or switch.
// let num1 = +prompt("Enter first number");
// let op = prompt("Enter operator (+, -, *, /)");
// let num2 = +prompt("Enter second number");
// switch (op) {
//   case "+": console.log(num1 + num2); break;
//   case "-": console.log(num1 - num2); break;
//   case "*": case "x": case "X": console.log(num1 * num2); break;
//   case "/": case "÷": console.log(num1 / num2); break;
//   default: console.log("Invalid operator");
// }

// 🟡 MEDIUM LEVEL (Loops + Logic)
// Q4. Take a number n and print the sum of all natural numbers from 1 to n using a for loop.
// let n = +prompt("Enter a number");
// let sum = 0;
// for (let i = 1; i <= n; i++) sum += i;
// console.log(`Sum of natural numbers from 1 to ${n} is ${sum}`);

// Q5. Ask a number and print its multiplication table up to 10.
let n = +prompt("Enter a number");
for (let i = 1; i <= 10; i++) console.log(`${n} X ${i} = ${n * i}`);

// Q6 Take a number and count how many digits it has (e.g., 1234 → 4 digits). Use a loop.
let number = +prompt("Enter a number:");
let count = 0;
let temp = number;
if (number === 0) {
  count = 1; // special case for 0
} else {
  while (temp !== 0) {
    temp = Math.floor(temp / 10);
    count++;
  }
}
console.log(`${number} has ${count} digits`);

// Q7. Take a word as input and print its reverse (e.g., hello → olleh). Don’t use built-in reverse methods.
let word = prompt("Enter your name: ");
let reversed = "";
console.log(`Name: ${word}`);
for (let i = word.length - 1; i >= 0; i--) {
  reversed += word[i];
}
console.log(`Reversed Name: ${reversed}`);

// 🔴 HARD LEVEL (Nested Loops & Practical Use)
// Q8. Write a program to find the factorial of any number entered by the user (e.g., 5! = 120).
let num = +prompt("Enter a number");
if (num < 0 || isNaN(num)) {
  console.log("Please enter a valid non-negative number");
} else {
  let fact = 1;
  for (let i = 1; i <= num; i++) fact *= i;
  console.log(`Factorial of ${num} is: ${fact}`);
}

// Q9. Ask the user for a number and check if it’s a prime number using loops (no built-in methods).
// let num = +prompt("Enter a number");
// if (num <= 1 || isNaN(num)) {
//   console.log("Not a prime number");
// } else {
//   let isPrime = true;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log("Prime number");
//   } else {
//     console.log("Not a prime number");
//   }
// }

// Q10. Print this star pattern using nested loops for a given number of rows:
let rows = +prompt("Enter the number of rows: ");
let star = "*";
for (let i = 1; i <= rows; i++) {
  star = "";
  for (let j = 1; j <= i; j++) {
    star = star + "*";
  }
  console.log(star);
}

//  day 34 practice
let tries = 0;
let opened = false;
let correctPass = "Manoj";

let userInput = prompt("Enter your password:");
tries++;

if (userInput === correctPass) opened = true;

while (userInput !== correctPass) {
  if (tries === 3) {
    console.error("Account Locked");
    break;
  }

  userInput = prompt("Enter your password again:");
  if (userInput === correctPass) opened = true;
  tries++;
}

if (opened === true) console.log("Account opened successfully");
