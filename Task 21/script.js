//  PRACTICE SESSION QUESTIONS "FUNCTIONS" JS YT
// Q1. Create an array with 3 fruits and print the second fruit
let fruits = ["Grapes", "Banana", "Apple"];
console.log(fruits[1]); // prints 2nd element

// Q2. Add "Mango" at the end and "Pineapple" at the beginning
fruits.push("Mango"); // adds at the end
fruits.unshift("PineApple"); // adds at the beginning
console.log(fruits);

// Q3. Replace "Mango" with "Kiwi" in the array above
fruits.pop();
fruits.push("Kiwi");
console.log(fruits);

// // Q4. What's the differnce between .push() and .unshift()?
// Ans push add the element in the last of the array,
//      whereas the unshift adds the element in the beginning

// Q5. Remove the last item from this array using a method
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.pop();
console.log(`5 is removed, ${numbers}`);

// Q6. Insert the "Red" and "Blue" from the index 1 in this array
let colors = ["Green", "Yellow"];
console.log(colors);
colors.splice(1, 0, "Red", "Blue");
console.log(colors);

// Q7. Extract only the middle 3 elements from this array
let items = [1, 2, 3, 4, 5, 6, 7];
console.log(items);
let newItems = items.slice(2, 5);
console.log(newItems);

// Q8. Sort the array alphabetically and then reverse it
let names = ["Ryuk", "Misa", "Kira", "Yagami light", "Lawiet"];
console.log(`Original Array: ${names}`);
console.log(`Sorted Array: ${names.sort()}`);
console.log(`Reversed Array: ${names.sort().reverse()}`);

// Q9. Use .map() to square each number
// let numbers = [1, 2, 3, 4];
console.log(numbers);
let squareArr = numbers.map(function (val) {
  return val * val;
});
console.log(squareArr);

// Q10. Use .filter to keep numbers greater than 10:
let arr = [1, 21, 76, 43, 9, 2, 73, 46, 33];
console.log(arr);
let newArr = arr.filter(function (val) {
  if (val > 10) {
    return true;
  }
});
console.log(newArr);

// Q11. Use .reduce() to find the sum of this array:
// let arr = [1, 21, 76, 43, 9, 2, 73, 46, 33];
let sum = arr.reduce((acc, val) => {
  return acc + val;
}, 0);
console.log(`sum of the ${arr} is ${sum}`);

// Q12. Use find() to get the first number less than 10
let arr2 = [11, 21, 76, 43, 9, 2, 73, 46, 33];
let first = arr2.find((val) => {
  if (val < 10) {
    return true;
  }
});
console.log(`First number which is less than 10 is:${first}`);

// Q13. Use .some() to check if any student has scored below 35:
// let arr = [1, 21, 76, 43, 9, 2, 73, 46, 33];
let fail = arr.some((val) => {
  if (val < 35) {
    return val;
  }
});
console.log(`do anyone got less than 35 :${fail}`);

// Q14. Use every() to check if all numbers are even
let even = [2, 6, 4, 100, 88];
let evenCheck = even.every((val) => {
  return val % 2 === 0;
});
console.log(evenCheck);

// Q15. identify which is higher order function
let fullName = ["Manoj", "Mukkamula"];
let [firstName, lastName] = fullName;
console.log(fullName);
console.log("Destructuring");
console.log(firstName);
console.log(lastName);

// Q16. Merge two arrays using spread operator
let x = [1, 2, 3];
let y = [5, 6, 7];
let z = [...x, ...y];
console.log(z);

// Q17. add "india" to the start using spread operator
let countries = ["USA", "UK"];
countries = ["INDIA", ...countries];
console.log(countries);

// Q18. clone an array properly not by reference
let clone = [9, 7, 4];
console.log(clone);
let clone2 = [...clone];
console.log(clone2);




// PRACTICE ZONE FROM NOTES
// Q1. Create an array of student names and print each
let studentNames = ["Naruto", "Sasuke", "Rock Lee", "Shikamaru"];
studentNames.forEach((names) => console.log(names));

// Q2. Filter even numbers from an array
let Numbers = [2, 3, 7, 10, 24, 5, 30];
let evens = Numbers.filter((val) => {
  return val % 2 === 0;
});
console.log(evens);

// Q3. Map prices to include GST (18%)
let prices = [100, 1000, 200, 599, 699];
let gst = prices.map((val) => {
  return val + (val / 100) * 18;
});
console.log(gst);

// Q4. Reduce salaries to calculate total payroll
let salaries = [10000, 150000, 250000, 350000];
let payroll = salaries.reduce((acc, val) => {
  return acc + val;
}, 0);
console.log(payroll);

// Q5. Find the first student with grade A
let students = [
  { name: "Manoj", grade: "B" },
  { name: "Amarnath", grade: "A" },
  { name: "Idris", grade: "C" },
];
let grade = students.find((val) => val.grade === "A");
console.log(grade);

// Q6. Write a function to reverse an array
function reverseArray(arr) {
  let rev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  return rev;
}
console.log(reverseArray([1, 2, 4, 6, 3, 8]));

// Q7. Sort array of ages in ascending order
let ages = [16, 36, 20, 50];
let asc = ages.sort((a, b) => {
  return a - b;
});
console.log(asc);

// Q8. Destructure first two elements of an array
let [A, B] = [...ages];
console.log(A, B);

// Q9. Use some() to check if any student failed
let marks = [40, 50, 80, 36, 89, 97];
let pass = marks.some((marks) => marks < 35);
console.log(pass);

// Q10. Use spread to copy and add new item
let org = [1, 4, 7, 11, 13];
let copy = [...org];
copy.push(15);
console.log(copy);
