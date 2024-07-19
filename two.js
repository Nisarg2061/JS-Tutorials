// JS tutorial for Operators and Conditional Statements
//
// Setting the theme to dark mode or light mode through if else conditional statements

let color;

mode = "light";

if (mode === "dark") {
  color = "Black";
} else {
  color = "White";
}

console.log(color);


// Checking if a number is odd or even
// Method 1

let nums = 2;

if (nums % 2 === 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}

// Method 2

nums = 99;
let result = nums % 2 ? "Odd number" : "Even number";

console.log(result);

