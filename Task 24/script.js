// Task 24 Practice Questions Yt
// Q1. Create an object for a student with name, age, and isEnrolled
let student = {
  name: "Manoj",
  age: 21,
  isEnrolled: true,
};
console.log(student);

// Q2. Can a object key be a number or boolean? Try this
// True, Yes it can be
let student2 = {
  number: 21,
  true: "yes",
};
console.log(student2);

// Q3. Access the value of "first-name" from this object:
const user = {
  "first-name": "Manoj",
};
// console.log(user."first-name"); // error
console.log(user["first-name"]); // Manoj

// Q4. Given a dynamic key, let key = "age", how will you access user[key]?
let key = "age";
const user2 = {
  age: 21,
};
console.log(user2[key]);

// Q5. From the object below, print the latitude:
const locations = {
  city: "Hyderabad",
  coordinates: {
    latitude: 23.3,
    longitude: 78.4,
  },
};
console.log(locations.coordinates.latitude);

// Q6. What will happen if coordinates is missing? How to prevent errors?
// if coordinates were missing then an error occurs saying can't read latitude
// so to avoid this type of erros we use OPTIONAL CHAINING
console.log(locations?.coordinate?.latitude); //undefined

// Q7. Destructure the city and lat from the location object above.
let { city } = locations;
let { latitude } = locations.coordinates;
console.log(city, latitude);

// Q8. Destructure the key "first-name" as a variable called firstName.
let { "first-name": firstName } = user;
console.log(firstName);

// Q9. Use for-in loop to log all keys in this object
const course = {
  title: "javaScript",
  duration: "4 weeks",
};
for (let key in course) {
  console.log(key);
}

// Q10. Use object.entries() to print all key-value pairs as:
// title: javaScript
// duration: 4 weeks
Object.entries(course).forEach(function (val) {
  console.log(val[0] + ": " + val[1]);
});

// Q11. Copy this obj using spread operator
const original = { a: 1, b: 2 };
console.log(`Original object: ${original}`);
let copy = { ...original };
console.log(`Copied object: ${copy}`);

// Q12. What is problem with below code:
const obj1 = { info: { score: 80 } };
const clone = { ...obj1 }; // Shallow copy
clone.info.score = 100;
console.log(obj1.info.score); // Output: 100
// Spread operator makes a shallow copy, so info object is still shared
//  changing clone.info.score also updates obj1.info.score.

// Q13. Deep clone the obj1 safely
let deepClone = JSON.parse(JSON.stringify(obj1));
deepClone.info.score = 200;
console.log("Score won't change now");
console.log(obj1.info.score);

// Q14. Rewrite this safely using optional chaining
const person = {};
// console.log(person.profile.name); error
console.log(person?.profile?.name); // undefined

// Q15. Use a variable to dynamically assign a property
const Key = "role";
let last = {
  name: "Manoj",
  [Key]: "Student",
};
console.log(last); // key is replaced with "role"

// PRACTICE ZONE QUESTIONS:
// Q1. Create an object for a book (title, author, price)
let book = {
  title: "Bhagavad Gita",
  author: "Veda Vyasa",
  price: "500",
};
console.log(book);

// Q2. Access properties using both dot and bracket
console.log(`Using "." ${book.title}`);
console.log(`Using "[]" ${book["title"]}`);

// Q3. Write a nested object (user with address and location)
let user3 = {
  address: "hyderabad",
  location: {
    latitude: 34.5,
    longitude: 87.3,
  },
};
console.log(user3.location.latitude);

// Q4. Destructure name and age from a student object
let student3 = {
  name: "Manoj",
  age: 25,
};
let { name, age } = student3;
console.log(name, age);

// Q5. Loop through keys and values of an object
for (let key in student3) {
  console.log(key, ": ", student3[key]);
}

// Q6. Convert object to array using Object.entries()
console.log(Object.entries(student3));

// Q7. Copy an object using spread operator
let book2 = { ...book };
console.log(book2);

// Q8. Create a deep copy of an object with nested structure
let user4 = JSON.parse(JSON.stringify(user3));
console.log(user4);

// Q9. Use optional chaining to safely access deep values
console.log(user3?.location?.latitude);

// Q10. Use a variable as a key using computed properties
let key2 = "game";
let sports = {
  [key2]: "chess",
};
console.log(sports);
