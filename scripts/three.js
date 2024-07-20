// console.log("Hello World!")
// Tutorial-3 : Loops and Strings

// For Loop
let n = prompt("Enter number");

for (let i = 0; i<=n; i++){
  console.log(i);
}

console.log("\n");

// While Loop
let i = 1;

while (i <= n) {
  console.log(i);
  i++
}

console.log("\n");

// Do While Loop
let j = 1;

do {
  console.log(j);
  j++
} while (j <= n);

console.log("\n");

// For-Of Loop
let str = prompt("Enter a word");
let len = 0;

for (let _ of str){
  len += 1;
}

console.log("Length of word '%s' is %d.", str, len);


//For-In Loop
let student = {
  name : "Nisarg",
  age : 19,
}

for (let i in student){
  console.log("%s : %s", i, student[i])
}

// printing even numbers

for (let k = 0; k <= 100; k++){
  if (k % 2 === 0){
    console.log(k);
  }
}
