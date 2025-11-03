// Task 17
// Introduction to JavaScript

// 1.  Write one line in your own words: “If HTML is skeleton, CSS is clothes — what is JS?”
//  My answer is js is brain that gives life and moment.

// 2. Write one example of where you’ve seen JS being used 
// When a button shows a message/ submits details  after clicking.

// Linking JavaScript Files
console.log("Connected!");

// Running JS in Browser Console
// 1. Open console and type: 2 + 2
// 2. Type: alert(“Hi”)
// 3. Try: prompt(“Your name?”)
// 4. Type: let city = “Bhopal”; city // done in console directly


// Variables and Keywords (var, let, const)
// 1. Declare your name using all three: var a = “Harsh”; let b = “Sheryians”; const c= “School”
// 2. Try reassigning them: a = “Updated”; b = “Updated”; c = “Updated”
// 3. Create a variable inside curly braces using let and log it outside.
// 4. Predict output before running.
// 5. Write 3 examples where const is useful (like PI, baseURL, etc.)
let a = "Manoj";
var b = "yadav";
const c = "Mukkamula";
// let a = "manoj updated"; // Error: 'a' is already declared using let
var b = "yadav1"; // possible since var allows re-assigning of values
// const c = "mukkamula2";  // since const has fixed values only, so re-assigning or updating values is not possible
{
let money = 255;
}
console.log(money); // 255 is not output because let is function scope
let name = {firstName: "Manoj", lastName: "Mukkamula "}
console.log(name.lastName+name.firstName); // Mukkamula Manoj
const pie = 3.14;
const appName = "Answerly";
const maxUsers = 100;
const age = "20";
const religon = "Hindu";


// Logging and Interaction (console, alert, prompt)
// 1. Log name, age, and city using console.log, console.info, console.warn
let city = "hyderabad";
console.info(name.lastName+name.firstName, age, city);
console.warn("This is a warning");

// // 2. Use prompt to take user’s name → alert a welcome message
// let welcome = prompt("Enter your name");
// alert("Welcome to this page, " + welcome + "!");

// // 3. Log typeof of user’s input.
// console.log(typeof welcome);

// // 4. Try: let age = prompt(“Enter age:”); console.log(age + 5); observe what happens.
// let age2 = prompt("Enter age");
// console.log(age2 + 5); // her the age is taken as string 


// Working with Strings
// 1. let msg = “I love chess”;
// 2. Try msg.slice(2, 6) and predict the result.
// 3. Try msg.split(” “) and count words.
// 4. Try msg.replace(“love”, “study at”).
// 5. Template string example: let name = “Harsh”; console.log(Hey ${name},
// welcome to JS!)
// 6. Check if msg.includes(“love")
let msg = "I love chess";
console.log(msg.slice(2,6)); // prediction: love
console.log(msg.split(""));  // 12 charcters
console.log(msg.replace("love", "play")); // I play chess
let Name = name.lastName + name.firstName;
console.log(`Hey ${Name} Welcome to Js`);
console.log(msg.includes("love")); //yes, so true


// Statements and Semicolons
// 1. Remove semicolon and check if code still runs. (no syntax error occurs in script.js)
// 2. Combine two statements in one line and see if it breaks. ans no, it wont break
// 3. Write 3 console.log statements without semicolons and predict output.
// let k=2
// const m = "l" SyntaxError: Unexpected
// var o = [45.6.7]

// Comments
// 1. Write your name as a single-line comment. 
// let name = "Manoj";
// 2. Write a 3-line comment explaining what your code does.
// This code covers JavaScript basics — variables, data types, and expressions.  
// It shows how let, var, and const work, and how primitive vs reference types behave.  
// It also includes string methods, console interactions, and examples of expressions vs statements.
// 3. Hide one console.log using comment and check output. // no output


// Expressions vs Statements
// 1. Type 5 + 10 (expression).
// 2. Type let x = 10; (statement).
// 3. Which one gives a value immediately?
let z = 5 + 10; //Expression (gives value 15 immediately).
let x = 10; // Statement (stores value, doesn’t show it).
// Expression gives a value immediately.
// 4. Try: let y = (5 + 10) * 2; console.log(y)
// 5. Write one line explaining the difference between both
let y = (5 + 10) * 2; console.log(y);
// An expression gives a value, but a statement just does something


// Data Types
// 1. Define variables of different data types
let Age = 25;
let name2 = "light";
let isStudent = true;
let skills = ["JS", "HTML"];
let user = { city: "Hyderabad" };
let x2 = null;
let y2;
let z2 = Symbol("id");
// 2. Log typeof each variable
console.log(typeof Age, typeof name2, typeof isStudent, typeof skills, typeof user, typeof x2, typeof y2, typeof z2);
// typeof shows the data type of each variable.
// For example:
// Age → number
// name2 → string
// isStudent → boolean
// skills → object (arrays are objects in JS)
// user → object
// x2 → object (special case for null)
// y2 → undefined
// z2 → symbol
// 3. Change one value and recheck typeof
name2 = 123;
console.log(typeof name2); // number
// 4. Add a number and string together
let result = Age + name2;
console.log(result); // gives "25123" because number + string = string (concatenation)


// Primitive vs Reference

// 1. Primitive Example
let x3 = 5;
let y3 = x3;
y3 = 10;
console.log(x3, y3); // 5, 10 → separate copies (x doesn’t change)
// 2. Reference Example
let obj1 = { name: "Harsh" };
let obj2 = obj1;
obj2.name = "Sheryians";
console.log(obj1.name); // "Sheryians" → both change together
// 3. Observation:
// Primitives (like numbers) store actual values,
// References (like objects) store memory addresses

