// Task 19 Practice Questions: Operators
// 1. Basic Operators (Arithmetic, Assignment, Increment, Decrement, Comparison, Logical, Bitwise)
// a. Create two numbers a = 10 and b = 3.
// Perform and log: a + b, a - b, a * b, a / b, a % b.
let a = 10; 
let b = 3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// b. Write: let x = 5; x = x + 3;
// Now rewrite the same using +=.
// Do the same for -=, *=, /=.
 let x = 5; 
 x = x + 3; //8
 x+=3; //11
 x-=4; //7
 x*=2; // 14
 x/= 7; //2
 x%= 2; // 0
 console.log(x);

// c. let count = 5;
// Use count++ and log value before and after.
// Repeat for count–.
let count = 5;
count ++; // increased but reflects from next time, so here count ==== 5
console.log(count); //6
++count; // immeadiate increase
console.log(count); //7

// d. Compare two values: 5 == “5” and 5 === “5”.
// Observe difference: == is not strict and ==== is strict
console.log( 5 == '5' ); // true , because here type is not checked
console.log( 5 === '5' ); // false, beacasue here type 

// e. Check if 10 is greater than 5, less than 20, and equal to 10.
console.log(10>5); // true
console.log(10<=20); // true
console.log(10===10); // true

// f. Try logical AND and OR:
// true && false
// true || false
// !(true)
console.log(true && false); // false
console.log(true || false); // true
console.log(!(true)); // false

// g. Predict the result of:
// (5 > 3 && 10 > 8),
// (5 > 3 || 10 < 8)
console.log(5 > 3 && 10 > 8); // true
console.log(5 > 3 || 10 < 8); // true

// h. Bitwise (light intro):
// Evaluate 5 & 1 and 5 | 1.
// Write result and your observation (no deep explanation needed now).
console.log(5 & 1); // 
console.log(5 | 1); // 


// 2. Variable Hoisting in JavaScript
// a. Predict output of:
// console.log(a);
// var a = 10 --> undefined
console.log(a1);
 var a1 = 10; // undefined due to hoisting 

// b. Predict output of:
// console.log(b2); // this comes under temporal dead zone here b2 is not initialized yet
// let b2 = 10; // reference error due to no hositing for let 

// c. Predict output of:
test();
function test() { console.log("Hello"); }
// output: Hello, function declartion is hosted so runs.

// d. Try writing a function expression before initialization and call it:
// hello()
// var hello = function() { console.log(“Hi”) }
// Write what happened and why.
// Error: hello is not a function — because only the variable is hoisted, not the function expression.

// e. Write one sentence:
// What gets hoisted? ans: Function declarations get fully hoisted.
// What does not get hoisted fully? ans: function expressions and variables are only partially hoisted (declared, not initialized). 


// 3. Conditional Operators (if, else, else-if, ternary, switch)
// a. Take input using prompt for age.
// If age > 18 → log “Adult”.
// Else → log “Minor”.
// let age = +prompt("Enter your age");
// if(age > 18){
//     console.log("Adult");
// } else{
//     console.log("Minor");
// }

// b. Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”
// let marks = +prompt("Enter your marks");
// if(marks >= 90) { console.log("A grade");}
// else if(marks >= 75) { console.log("B grade");}
// else if(marks >= 50) { console.log("B grade");}
// else { console.log("Fail");}

// c. Create a variable city = “Bhopal”.
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”
let city = "Hyderabad";
if(city === "Bhopal") { console.log("Madya Pradesh");}
else if(city === "Delhi") { console.log("Capital");}
else if(city === "Hyderabad") { console.log("Telangana");}
else { console.log("Unkown City");}

// d. Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary.
let score = 40;
let sol = (score > 35) ? "Pass" : "Fail";
console.log(sol);

// e. Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }
let temperature = 30;
let wheather = (temperature > 40) ? "Hot" : "Pleasant";
console.log(wheather);

// f. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.
let day = 4;
switch(day){
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thrusday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
}
// g. Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”
let age2 = 18; 
let country = "India";
if(age2 > 18 && country === "India"){
    console.log("Eligible to vote");
} else{
    console.log("Not Eligible");
}
