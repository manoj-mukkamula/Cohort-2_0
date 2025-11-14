// Self Task - Practice Questions from chatgpt SELF TASK

// 🟢 EASY LEVEL (Basics & Conditionals)

// Q1. Write a program that takes a number as input and prints whether it’s positive, negative, or zero.
function check(n) {
  if (n > 0) console.log(n, " is a positive number");
  else if (n < 0) console.log(n, " is a negative number");
  else if (n === 0) console.log(n, " is a zero");
  else console.log("Invalid Input");
}
check(2);

// Q2. Write a pure function `add(a, b)` that returns the sum,
//     and an impure function `logAdd(a, b)` that logs the result and returns it.
function add(a, b) {
  return a + b;
}
// pure because it depends only on inputs and gives the same output every time without side effects
console.log(add(4, 7));
function logAdd(a, b) {
  const sum = a + b;
  console.log(sum);
  return sum;
}
// impure because it performs a side effect (console.log) in addition to returning a value
console.log(logAdd(15, 13));

// Q3. Create an array of 5 numbers.
//     Access 1st & last elements, then push, pop and print array after each step.
let numbers = [1, 2, 3, 4, 5];
console.log("First:", numbers[0]);
console.log("Last:", numbers[numbers.length - 1]);
numbers.push(6);
console.log("After push:", numbers);
numbers.pop();
console.log("After pop:", numbers);



// 🟡 MEDIUM LEVEL (Functions, Scoping, Arrays & Iteration)

// Q4. Write a function that accepts an array of names and prints each name with index using `forEach`.
//     Inside the loop, show block scoping using `let`.
function giveNames(arr) {
  arr.forEach((name, index) => {
    console.log(`${name} : index: ${index}`);
    {
      let msg = "inside block";
      console.log(msg); // works
    } // console.log(msg); // error (block scoped)
  });
}

giveNames(["Amarnath", "Idris", "Manoj"]);

// Q5. Given an array of numbers, write a function that returns a new array
//      containing only numbers greater than 10 using filter().
let array = [1, 5, 3, 8, 34, 69, 53, 108];
let newArray = array.filter(function (i) {
  return i > 10;
});
console.log(newArray);

// Q6. Write a function combine(a, b) that returns a new merged array using the spread operator,
//     and print both original arrays to show they stay unchanged.
function combine(a, b) {
  const newArr = [...a, ...b];
  console.log("Original A:", a);
  console.log("Original B:", b);
  console.log("New Array:", newArr);
}
combine([1, 2, 3], [4, 5, 6]);

// Q7. Create an array of fruits and use forEach() to print each fruit with its index.
let fruits = ["Apple", "Banana", "Water Melon", "Mango"];
fruits.forEach((value, index) => {
  console.log(`Index ${index}: ${value}`);
});



// 🔴 HARD LEVEL (Objects, Nested Objects, Pure & Impure Functions)

// Q8. Create an array of items, remove the first two using shift() twice,
//     then add two new items at the beginning using unshift(); print the array after each step.
let items = ["Bottle", "Chair", "Laptop", "Smart Phone"];
items.shift();
console.log("After shift 1:", items);
items.shift();
console.log("After shift 2:", items);
items.unshift("Chair");
console.log("After unshift 1:", items);
items.unshift("Bottle");
console.log("After unshift 2:", items);

// Q9. Create an object student with name, age, and a nested address object.
//     Update only the city inside address without modifying other properties.
let student = {
  name: "Manoj",
  age: 21,
  address: {
    city: "Hyderabad",
    pincode: 500026,
  },
};
console.log("Before update:", student.address.city);
student.address.city = "Secunderabad";
console.log("After update:", student.address.city);

// Q10. Write a function updateUser(user) that returns a new updated object using the
//      spread operator (pure), and another function saveUser(user) that logs the object (impure).
//      Explain in one line which is pure and which is impure.
function updateUser(user) {
  return { ...user, city: "Hyderabad" };
  // pure function: creates and returns a NEW updated object, original unchanged
}
function saveUser(user) {
  console.log(user);
  // impure function: console.log is a side effect
}
saveUser(updateUser({ name: "Manoj", age: 21 }));
