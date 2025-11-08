// Level 1 – Pure Beginner Practice Questions
// 7. Ask user’s age and check if eligible to vote

// let age = prompt("Enter your age");
// if (age === null || age < 0 || age > 130) {
//   console.warn("Enter the valid age");
// } else if (age.trim() === "") {
//   console.warn("Blank spaces are not allowed");
// } else if (isNaN(age)) {
//   console.error("Please enter a valid number");
// } else {
//   age = Number(age);
//   if (age < 18) console.log("Not eligible to vote");
//   else console.log("You are eligible to vote");
// }

// 8. Print multiplication table of 5
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 9. Count how many numbers between 1 and 15 are greater than 8
let count = 0;
for (let i = 1; i <= 15; i++) {
  if (i > 8) {
    count++;
  }
}
console.log(`There are ${count} numbers`);

// 10. Ask user for password and print access status
// let password = prompt("Enter your password");
// const pass = "password";
// if (password === pass) {
//   console.log("You can access");
// } else {
//   console.log("Your access is denied");
// }

// Level 2 – Slightly Tougher but Logical
// 11. Allow only 3 attempts to enter correct password
// const password = "password";
// let attempts = 3;
// for (let i = 1; i <= attempts; i++) {
//   let input = prompt("Enter your password:");
//   if (input === password) {
//     console.log("Access granted");
//     break;
//   } else {
//     console.warn(`Wrong password. ${attempts - i} attempts left`);
//     if (i === attempts) console.error("Access denied, Try tomorrow");
//   }
// }

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// let count2 = 0;
// while (true) {
//   let input = prompt(`Enter a word (type "stop" to end): `);
//   if (input === "stop") {
//     console.log("Stopped");
//     break;
//   }
//   if (input === "yes") count2++;
// }
// console.log(`"yes" was typed ${count2} times.`);

// 13. Print numbers divisible by 7 from 1 to 50
console.log("The following numbers are divisble by 7");
for (let i = 1; i <= 50; i++) {
  if (i % 7 === 0) {
    console.log(i);
  }
}

// 14. Sum of all odd numbers from 1 to 30
let sum = 0;
for (let i = 1; i <= 30; i++) {
  if (i % 2 === 1) {
    sum += i;
  }
}
console.log(`The sum  is: ${sum}`);

// 15. Keep asking number until user enters an even number
// while (true) {
//   let input = +prompt("Enter a number");
//   if (input % 2 === 0) {
//     console.log("You have entered a even number");
//     break;
//   }
// }

// 16. Print numbers between two user inputs
// let start = +prompt("Enter the starting number:");
// let end = +prompt("Enter the ending number (should be greater than start):");
// if (start < end) {
//   for (let i = start; i <= end; i++) {
//     console.log(i);
//   }
// } else {
//   console.error("Invalid inputs");
// }

// 17. Print only first 3 odd numbers from 1 to 20
let num = 1;
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 1 && num <= 3) {
    num++;
    console.log(i);
  }
}

// 18. Ask user 5 numbers. Count how many are positive
let counting = 0;
for (let i = 1; i <= 5; i++) {
  let input = +prompt("Enter a number");
  if (input > 0) {
    counting++;
  }
}
console.log(`${counting} postive numbers were entered`);

// 19. ATM Simulator – Allow 3 withdrawals
let balance = 1000;
for (let i = 1; i <= 3; i++) {
  let amount = Number(prompt(`Enter withdrawal amount (Attempt ${i}/3):`));
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    console.log(`₹${amount} withdrawn. Remaining balance: ₹${balance}`);
  } else {
    console.warn("Insufficient balance or invalid amount!");
  }
}
console.log(`Final balance: ₹${balance}`);
