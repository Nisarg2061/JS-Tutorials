const btn1 = document.querySelector("#btn1");
  let counter = 0;
btn1.onclick = () => {
  box.innerText = counter;
  counter += 1;
}
 
let a = 0;
const box = document.querySelector("#box");
box.onmouseover = () => {
  box.innerText = counter;
  counter += 1;
}
