let body = document.querySelector("body")
body.style.backgroundColor = "black";

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red"

body.prepend(newBtn);
