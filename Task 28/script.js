// TASK 28 JS PRACTICE QUESTIONS EASY
// 🟢 Level 1 – Basic Function, Array & Object Code

// Q1. Write a function `sayHello()` that prints "Hello JavaScript".
function sayHello() {
  console.log("Hello JavaScript");
}
sayHello();

// Q2. Create a function `add(a, b)` that returns their sum and log the result.
function add(a, b) {
  return a + b;
}
console.log(add(5, 7));

// Q3. Write a function with a default parameter `name = "Guest"`
//     that prints "Hi <name>".
function greet(name = "Guest") {
  console.log(`Hi ${name}!`);
}
greet();


// Q4. Use rest parameters to make a function that adds unlimited numbers.
// using for loop
function Unlimited(...values) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  console.log(sum);
}
Unlimited(1, 2, 3, 4);

// using for each
function unlimitedEach(...val) {
  let sum = 0;
  val.forEach(function (element) {
    sum += element;
  });
  console.log(sum);
}
unlimitedEach(1, 2, 3, 4, 5);

// using reduce
function unlimitedReduce(...v) {
  let sum = v.reduce((acc, val) => {
    return (acc += val);
  }, 0);
  console.log(sum);
}
unlimitedReduce(1, 2, 3, 4, 5, 6);


// Q5. Create an IIFE that prints "I run instantly!".
(function () {
  console.log("I run instantly!");
})();

// Q6. Make a nested function where the inner one prints a variable
//     from the outer one.
(function outer() {
  let fnc = "Closure";
  inner();
  function inner() {
    console.log(`This is called ${fnc}`);
  }
})();

// Q7. Create an array of 5 fruits. Add one at the end and
//     remove one from the beginning.
let fruits = ["Apple", "Banana", "Mango"];
fruits.push("Grapes");
console.log("After adding:", fruits);
fruits.shift();
console.log("After removing:", fruits);

// Q8. Use a `for` loop to print all elements of an array.
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Q9. Create an object `person` with keys `name`, `age`, and `city`,
//     and print each key’s value.
let person = {
  name: "Manoj",
  age: 21,
  city: "Hyderabad",
};
for (let key in person) {
  console.log(person[key]);
}

// Q10. Use `setTimeout()` to log "Time’s up!" after 2 seconds.
setTimeout(function () {
  console.log("Time’s up!");
}, 2000);



// EXTRA (Practice Topics Mentioned)
// Q11. Use `forEach` to print each item in an array.
let names = ["Amarnath", "Idris", "Manoj"];
names.forEach((element) => {
  console.log(element);
});

// Q12. Create an object and show creating, accessing, updating,
//      and deleting properties.
let person2 = {
  // creating
  name: "Manoj",
  age: 21,
  city: "Hyderabad",
};
for (let key in person2) {
  console.log(person2[key]); // accessing
}
person2.city = "Secunderabad"; // updating
delete person2.age; // deleting
console.log(person2);

// Q13. Create a nested object and access inner values.
let person3 = {
  // creating
  name: "Manoj",
  age: 21,
  address: {
    city: "Hyderabad",
    pincode: 500026,
  },
};
console.log(person3.address.city);
