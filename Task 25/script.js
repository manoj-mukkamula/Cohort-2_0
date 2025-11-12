// Self Task - Practice Questions from chatgpt
// 🟢 EASY LEVEL (Basics & Conditionals)
// Q1. Write a program using a do-while loop that asks the user to enter a number until they type 0, then prints the sum of all entered numbers.
let sum = 0;
let num;
do {
  num = +prompt("Enter a number (0 to stop):");
  sum += num;
} while (num !== 0);
console.log("Total sum:", sum);

// Q2. Create a function printEvenNumbers(limit) that prints all even numbers up to the given limit using a for loop and the continue statement.
function printEvenNumbers(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 2 === 1) {
      continue;
    }
    console.log(i);
  }
}
printEvenNumbers(10);

// Q3. Demonstrate hoisting by declaring a variable after using it in a console.log statement, and observe what gets printed.
// console.log(name); //  ReferenceError: Cannot access 'name' before initialization
// let name = "Manoj";
// console.log("After initialization:", name); // Manoj

// 🟡 MEDIUM LEVEL (Loops + Functions)
// Q4. Write a function sumUntilLimit() that keeps asking the user for numbers using a do-while loop, adds them up, and stops (break) if the total exceeds 100.
function sumUntilLimit() {
  let total = 0;
  do {
    const num = +prompt("Enter a number:");
    total += num;
    if (total > 100) break;
  } while (true);
  console.log("Total:", total);
}
sumUntilLimit();

// Q5. Create a function countVowels(str) that takes a string as a parameter and returns the number of vowels in it using a for loop.
function countVowels(str) {
  let vowels = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
      vowels++;
    }
  }
  console.log("Number of vowels:", vowels);
}
countVowels("manoj mukkamula");

// Q6. Write a function findFactorial(num) using recursion that returns the factorial of a number.
function findFactorial(num) {
  if (num < 0) return "Invalid input";
  if (num === 0 || num === 1) return 1;
  return num * findFactorial(num - 1);
}
console.log(findFactorial(5)); // 120

// Q7. Write a program to demonstrate arguments and parameters: create a function add(a, b) that prints their sum, then call it using different types of arguments (numbers, strings, etc.) and observe the output.
const add = (a, b) => a + b;
console.log(add(5, 4)); // 9
console.log(add("Manoj", " Mukkamula")); // Manoj Mukkamula

// 🔴 HARD LEVEL (Logic + Recursion + Hoisting)
// Q8. Write a recursive function called sumOfDigits(n) that returns the sum of digits of a number (e.g., 123 → 6).
function sumOfDigits(n) {
  if (n === 0) return 0;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}
console.log(sumOfDigits(1234)); // Output: 10

// Q9. Create a program with a function loginSystem() that allows 3 login attempts using a do-while loop; stop early using break if the user enters the correct password.
function loginSystem() {
  const password = "manoj";
  let attempts = 0;
  let input;
  do {
    input = prompt("Enter the password:");
    attempts++;
    if (input === password) {
      console.log("Access Granted");
      break;
    } else {
      console.log("Access Denied, Try again!");
    }
    if (attempts === 3) {
      console.log("Account Closed after 3 failed attempts");
      break;
    }
  } while (true);
}
loginSystem();

// Q10. Write a code snippet that demonstrates function hoisting by calling a function before its definition, then do the same with a function expression, and note the difference in behavior.
// Function Declaration (Hoisted)
hoist(); // Works fine
function hoist() {
  console.log("Function Declaration called before definition");
}
//  Function Expression (Not Hoisted)
// hoist2(); // ReferenceError: Cannot access 'hoist2' before initialization
let hoist2 = function () {
  console.log("Function Expression called before definition");
};
