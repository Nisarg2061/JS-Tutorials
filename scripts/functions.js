function printer() {
  // function thet prints a line
  console.log("Hello from function!");
}
 
printer(); // Calling the function


function printName(nameStr) { // nameStr --> Function parameter
  console.log("Hello",nameStr);
}

printName("Nisarg"); // Passing with an argument

// Function to calculate sum of two numbers
function sum(a, b) {
  return a + b;
}
console.log(sum(2,9));
