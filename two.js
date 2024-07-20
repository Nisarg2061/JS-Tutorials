// JS tutorial for Operators and Conditional Statements
//
// Setting the theme to dark mode or light mode through if else conditional statements

// let color;
//
// mode = "light";
//
// if (mode === "dark") {
//   color = "Black";
// } else {
//   color = "White";
// }
//
// console.log(color);
//
//
// // Checking if a number is odd or even
// // Method 1
//
// let nums = 2;
//
// if (nums % 2 === 0) {
//   console.log("The number is even");
// } else {
//   console.log("The number is odd");
// }
//
// // Method 2
//
// nums = 99;
// let result = nums % 2 ? "Odd number" : "Even number";
//
// console.log(result);
//
// // Switch Case
//
// let age = 19;
//
// switch (age) {
//   case 19:
//     console.log("Your age is 19");
//     break;
//
//   default:
//     console.log("Your age is not 19");
//     break;
// }

// let y_name = prompt("Enter name:");
// console.log(y_name);

// Checking if user input is a multiple of 5 or not
 
// let check = prompt("Enter a number.");
// let results = check % 5 ? "not a multiple" : "a multiple";
// console.log("The number entered is " + results + " of 5.");

// // Program to check score of a student

let scores = prompt("Enter your grades.");

let grades = "Your grade is ";

if (scores <= 100 && scores >= 90) {
  console.log(grades + "A.");
} else if (scores <= 89 && scores >= 70) {
  console.log(grades + "B.");
} else if (scores <= 69 && scores >= 60) {
  console.log(grades + "C.");
} else if (scores <= 59 && scores >= 50) {
  console.log(grades + "D.");
} else if ( scores > 100 ) {
  console.log("Invalid score!!");
} else {
  console.log("You fail!!");
}
