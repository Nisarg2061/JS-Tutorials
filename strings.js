// username generator

let userinp = prompt("Enter your full name."); // Taking user input

//  username =  @  + removing all blank spaces and covert to lower case + length of input string
let username = "@" + userinp.replaceAll(" ", "").toLowerCase() + userinp.length;

alert(username);

