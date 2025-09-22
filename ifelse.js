// Exercise 1
let age = Number(prompt("Enter your age:"));
if (age >= 18) {
  console.log("You can vote ✅");
} else {
  let yearsLeft = 18 - age;
  console.log(`You can vote in ${yearsLeft} years`);
}

// Exercise 2
if (age < 13) {
  console.log("Child ticket: $5");
} else if (age >= 13 && age <= 59) {
  console.log("Adult ticket: $10");
} else {
  console.log("Senior ticket: $7");
}

// Exercise 3
let birthYear = Number(prompt("Enter your birth year:"));

if (birthYear >= 1901 && birthYear <= 2000) {
  console.log("You were born in the 20th century");
} else if (birthYear >= 2001 && birthYear <= 2100) {
  console.log("You were born in the 21st century");
}