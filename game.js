// guess the number game
let exact = 19;
let guess = prompt("Guess the correct number:");

while (guess != exact) {
  console.log("Your guess",guess);
  guess = prompt("Guess again.");
}

alert("You Guessed it!!");

