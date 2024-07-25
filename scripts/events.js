let curr = "Dark";
//-----------------------------------------------------------------------------------------//
const btn = document.querySelector("#modeBtn"); // selecting the button taht toggles mode
const body = document.querySelector("body"); // selecting body
body.classList.add(curr); // Default Class
btn.innerText = "Mode: " + curr; // Default mode text
//-----------------------------------------------------------------------------------------//
const modes = (mode) => { // Function to change modes
  body.classList.remove(curr); // removing the current class
  body.classList.add(mode); // adding the class corresponding to the mode [Light <--> Dark]
  btn.innerText = "Mode: " + mode; // Toggle button text
  curr = mode;
} 
//-----------------------------------------------------------------------------------------//
const changeMode = () => { // On clik trigger
  if (curr === "Dark") { //Checking the current mode
    modes("Light"); // calling the mode changer
  } else {
    modes("Dark"); // Calling the mode changer
  }
}
btn.addEventListener("click", changeMode); // when the event is triggered
//-----------------------------------------------------------------------------------------//
