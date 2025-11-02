// DAY 27 PRACTICE:
// Console types
console.info("This is an info message");
console.warn("This is a warning message");
console.error("This is an error message");
console.table({ name: "Alice", age: 30, city: "New York" });
console.group("User Details");
console.time("time taken");

// prompt and alert
// let userName = prompt("Enter your name:");
// alert(`Hello, ${userName}! Welcome to the program.`);

// string methods
let name = "Naruto uzumaki";
console.log(name.split(""));
console.log(name.split("a"));
console.log(name.replace("o", "oo"));
console.log(name.replace("uzumaki", "Namikaze"));
console.log(name.includes("to"));

// statement and expressions
let a = 10; // statement
let b = 20; // statement
let c = a + b; // expression
console.log(c); // expression
console.groupEnd("User Details");

//  Learn everything js : Operators
// Pracatice Problems:

// 1. Predict the output of the following code snippets:
console.log("10" + 1); // "101" beacause of string concatenation
console.log("10" - 1); // 9 because of type coercion to number(number subtraction)
console.log(true + false); // 1 because true is 1 and false is 0, so 1 + 0 = 1
console.log(!!"Sheryians"); // true because non-empty string is truthy

// 2. Convert using unary +
let str = "42";
let num = +str; // "+" converts string to number
console.log(num); // 42

// 3. Use of ternary operator
let Age = 17;
let eligibility = Age >= 18 ? "Eligible to vote" : "Noteligible";
console.log(eligibility); // Not eligible

// 4. Falsy values in JavaScript
function Calc(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
    case "%":
      return a % b;
      break;
    default:
      return "Invalid operator";
  }
}
console.log(Calc(10, 5, "%")); // 0

// 5. creating a function to get grade based on score
function getGrade(score) {
  if (score >= 90 && score <= 100) return "outstanding";
  if (score >= 80 && score < 90) return "excellent";
  if (score >= 70 && score < 80) return "good";
  if (score >= 60 && score < 70) return "average";
  if (score >= 32 && score < 60) return "below average";
  if (score >= 0 && score < 32) return "Fail";
  return "Invalid score";
}
// Example usage:
let score = 55;
console.log(`The grade for score ${score} is: ${getGrade(score)}`);

// Control Flow
// 1. Rock, Paper, Scissors game logic
function getValues(user, computer) {
  if (user === "rock" && computer === "scissors") return "User wins";
  if (user === "scissors" && computer === "paper") return "User wins";
  if (user === "paper" && computer === "rock") return "User wins";
  if (user === computer) return "It's a tie";
  if (user === "rock" && computer === "paper") return "Computer wins";
  if (user === "scissors" && computer === "rock") return "Computer wins";
  if (user === "paper" && computer === "scissors") return "Computer wins";
  return "Invalid input";
}
console.log(getValues("rock", "scissors"));

// 2. Login message:
let isLoggedIn = true;
let isAdmin = false;
function LoginMessage(isLoggedIn, isAdmin) {
  if (isLoggedIn === false) return "Please log in to continue.";
  if (isLoggedIn === true && isAdmin === true)
    return "Welcome Admin! You have full access.";
  if (isLoggedIn === true && isAdmin === false)
    return "Welcome User! You have limited access.";
}

// 3. Weather message using switch case
let wheather = "rainy";
switch (wheather) {
  case "sunny":
    console.log("its a sunny day so dont wear a jacket ");
    break;
  case "rainy":
    console.log("Its rainy, so wear a rain coat");
    break;
  case "cool":
    console.log("its cool, so wear sweaters");
    break;
}

// 4. Age Checker
let age = 15;
function ageInput() {
  if (age >= 1 && age <= 10) return "Kid";
  if (age >= 11 && age <= 20) return "Teen";
  if (age >= 21 && age <= 30) return "Adult";
  if (age >= 31 && age <= 50) return "Middle";
  if (age >= 50) return "Senior";
}
console.log(ageInput(age));


console.timeEnd("time taken");
