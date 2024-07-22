// -------------------------------------------------------------------- //
// function printer() {
//   // function thet prints a line
//   console.log("Hello from function!");
// }
//  
// printer(); // Calling the function
//
//
// function printName(nameStr) { // nameStr --> Function parameter
//   console.log("Hello",nameStr);
// }
//
// printName("Nisarg"); // Passing with an argument
// -------------------------------------------------------------------- //
// // Function to calculate counter of two numbers
// function counter(a, b) {
//   return a + b;
// }
// console.log(counter(2,9));
//
// // Arrow Function *** Modern day standard ***
// const arrowcounter = (a, b) => {
//   return a + b;
// }
// console.log(arrowcounter(1, 2));
//
// // Arrow function for multiplication
// const arrowMul = (a, b) => {
//   return a * b;
// }
// console.log(arrowMul(1, 88));
// -------------------------------------------------------------------- //
// // Arrow Function to find number of vowels in a string.
// const vowelsCounter = (word) => {
//   let count = 0; // The var that tracks the number of vowels
//   let vovels = ["a", "e", "i", "o", "u"]; // An array of vowles
//   for (const i of word) {
//     for (const j of vovels) {
//       if ( j == i) { // checks with each vowels in the array
//         count += 1; // Adds to the tracker if the match is found
//       }
//     }
//   }
//   return count; // returns the number of vowels in the string
// }
//
// let result = vowelsCounter("Nisarg");
// console.log("Number of vovels:", result); // Expected result : 2
// -------------------------------------------------------------------- //
// // forEach loop in Arrays using Arrow Functions
// const arr = [1, 2, 3, 4];
//
// arr.forEach((val) => {
//   console.log(val);
// });
//
// // Print square of each number for a given array using forEach
// const calculateSquare = (val) => {
//   console.log(val ** 2);
// }
//
// arr.forEach(calculateSquare);
// -------------------------------------------------------------------- //
// // Array Methods
// const calculateSquare2 = (val) => {
//   return val ** 2;
// 
//
// /* kind of like forEach but also returns a 
// value for it to get stored into an array */
// const squareArr = arr.map(calculateSquare2);
// console.log(squareArr);
// -------------------------------------------------------------------- //
// reduce method takes in all the values of array and gides out a single output
// const arr = [1, 2, 3, 4];
// let initalSum = 0;
// const reducedArray = arr.reduce((results, val) => {
//   return results + val;
// });
//
// console.log(reducedArray);
// -------------------------------------------------------------------- //
// Filtering out the marks of student who scored more than 90
// const marks = [90, 99, 88, 92, 1, 2, 44];
//
// const filteredMarks = marks.filter((val) => {
//   return val >= 90;
// });
// console.log(filteredMarks)
// -------------------------------------------------------------------- //
// Creating an array of natural number of size n and then using reduce to calculate sum and product
let n = prompt("Enter the length of array.");
let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(i+1);
}

console.log(arr)

const sumArr = arr.reduce((result, curr) => {
  return result + curr;
});

const proArr = arr.reduce((result, curr) => {
  return result * curr;
});

console.log("Sum : %d \nProduct : %d", sumArr, proArr);
// -------------------------------------------------------------------- //
