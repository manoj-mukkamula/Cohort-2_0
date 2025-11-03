// Task 18: Loops questions from yt video
// Q1. Print numbers from 1 to 10 using a for loop.
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// Q2. Print numbers from 10 to 1 using a while loop.
// let i = 10;
// while(i>=1){
//     console.log(i);
//     i--;
// }

// Q3. Print even numbers from 1 to 20 using a for loop.
// for(let i=1; i<=20; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// Q4. Print odd numbers from 1 to 15 using a while loop.
// let j = 1;
// while(j<=15){
//     if(j%2 === 1){
//         console.log(j);
//     }
//     j++;
// }

// Q5. Print the multiplication table of 5 (i.e., 5 x 1 = 5 ... 5 x 10 = 50).
// for(let i=1; i<=10; i++){
//     console.log(`5 x ${i} = ${i*5}`)
// }

// Q6. Find the sum of numbers from 1 to 100 using a loop.
// let sum = 0;
// for(let k=1; k<=100; k++){
//     sum = k + sum;
// }
// console.log(sum);

// Q7. Print all numbers between 1 to 50 that are divisible by 3.
// for(let i=1; i<=50; i++){
//     if(i%3 === 0){
//         console.log(i);
//     }
// }

/* Q8. Ask the user for a number  and print whether each number 
from 1 up to 'n' is odd or even (e.g., "1 is odd", "2 is even", ...).  */
// let n = +prompt("Enter your number");
// for(let i=1; i<=n; i++){
//     if(i%2 === 0){
//         console.log(`${i} is even`);
//     }
//     else{
//         console.log(`${i} is odd`);
//     }
// }

// Q9. Count how many numbers between 1 to 100 are divisible by both 3 and 5
// let count = 0;
// for(let i=1; i<=100; i++){
//     if(i%3===0 && i%5===0){
//         count += 1;
//     }
// }
// console.log(count);


// Break and continue
// Q1: Stop at First Multiple of 7
// Write a loop from 1 to 100 that:
// • Prints each number
// • Stops completely when it finds the first number
//   divisible by 7
for(let i=1; i<=100; i++){
    console.log(i);
    if(i===7){
        break;
    }
}

// Q2: Skip Multiples of 3
// Write a loop from 1 to 20 that:
// • Skips numbers divisible by 3
// • Prints all others
// 💡 Use continue
// Expected output:
// 1 2 4 5 7 8 10 11 ... (no 3, 6, 9, etc.)
for(let i=1; i<=20; i++){
    if(i%3===0){
        continue;
    }
    console.log(i);
}

// Q3: Print First 5 Odd Numbers Only
// Write a loop from 1 to 100 that:
// • Prints only 5 odd numbers
// • Then stops the loop
// 💡 Use both if, continue, and a counter + break
// Expected output:
// 1 3 5 7 9
let count2 = 0;
for(let i=1; i<=100; i++){
    if(i%2===1){
        count2++;
        console.log(i);
    }
    if(count2 === 5) break;
}

//  Task 18 Practice questions from notes
// Q1. Reverse a string using loop
let reversed = "";
let username = "Manoj";
for (let i = username.length - 1; i>=0; i--) {
  reversed = reversed + username[i];
}
console.log(reversed);

// Q2. Sum of all numbers in an array
let sum2 = 0;
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i <= arr.length-1; i++) {
  sum2 = sum2 + arr[i];
}
console.log(sum2);

// Q3. Guess number game – use while to ask until correct
// let number = 10;
// let guess = Number(prompt("Guess a number between 1 to 20"));
// while (guess !== number) {
//   guess = Number(prompt("Wrong guess! Try again."));
// }
// console.log(`Correct guess, ${guess} is the answer`);


// Q4. Pattern: Print triangle using *
let star = '*';
for(let i=1; i<=5; i++){
    console.log(star);
    star = star + "*";
} // its an right-angled triangle
//  let rows = 5;
// for (let i = 1; i <= rows; i++) {
//   let spaces = " ".repeat(rows - i);
//   let stars = "*".repeat(2 * i - 1);
//   console.log(spaces + stars);
// } 
