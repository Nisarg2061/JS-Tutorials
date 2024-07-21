// Arrays in Javascript

// let marks = [85, 97, 77, 88, 94];
// console.log(marks);
//
// // for loop
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }
//
// // for-of loop
// // for (const i of arr) {
// //   console.log(i)
// // }
//
// let avg = 0;
//
// for (const i of marks) {
//   avg = avg + i;
// }
//
// avg = avg / marks.length;
// console.log(avg)

// Applying offer to each item in the Array

let item = [200, 250, 5, 100, 330, 300];
console.log("Price of items:", item);

for (let i = 0; i < item.length; i++) {
  item[i] = item[i] - item[i] * 0.1; //discount : 10%
}

console.log("Updated prices after discount:", item);
