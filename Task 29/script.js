// TASK 29 JS PRACTICE QUESTIONS EASY
// 🟡 Level 2 – Functional Thinking & Logic Tasks (Intermediate)

// Q1. Write a higher-order function runTwice(fn)
//     that takes another function and executes it two times.
function runTwice(fn) {
  console.log(fn());
  console.log(fn());
}
runTwice(() => 15);

// Q2. Create one pure function that always returns the same output
//     for a given input, and one impure function using a global variable.
let num = 5;
const pure = (n) => n; // uses only input so pure function
const impure = (n) => console.log(num + n); // uses global + input, so impure function
console.log(pure(5));
impure(5);

// Q3. Write a function that uses object destructuring inside parameters
//     to extract and print name and age.
let student = { name: "Manoj", age: 21 };
function extract({ name, age }) {
  console.log(name, age);
}
extract(student);

// Q4. Given an array of numbers, use map() to create a new array
//     where each number is squared.
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let ans = numbers.map((n) => n * n);
console.log(ans);

// Q5. Use filter() to get only even numbers from an array.
let even = numbers.filter((n) => n % 2 === 0);
console.log(even);

// Q6. Use reduce() to find the total salary from an array of numbers
//     [1000, 2000, 3000].
let salaries = [1000, 2000, 3000, 5000, 15000];
let total = salaries.reduce((sum, amount) => {
  sum = sum + amount;
  return sum;
}, 0);
console.log(total);

// Q7. Create an array of names and use some() and every()
//     to test a condition (e.g., all names longer than 3 chars).
let names = ["Manoj", "Idris", "Amarnath", "L"];
let some = names.some((name) => name.length > 3);
console.log(some);
let every = names.every((name) => name.length > 3);
console.log(every);

// Q8. Create a nested object (user → address → city)
//      and access the city name inside it.
let person = {
  user1: { name: "L", address: { country: "Japan", city: "Tokyo" } },
  user2: { name: "Manoj", address: { country: "India", city: "Hyderabad" } },
};
console.log(person.user2.address.city);
