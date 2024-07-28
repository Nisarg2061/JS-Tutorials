var count = 0
//-----------------------------------------------------------------------------------------//
class car {
  constructor(brand) {
    count += 1;
    this.brand = brand;
    console.log("Object %d Created...", count);
  }
  
  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }
}  
//-----------------------------------------------------------------------------------------//
let fortunuer = new car("Toyota");
console.log(fortunuer);
let creta = new car("Hyndai");
console.log(creta);
//-----------------------------------------------------------------------------------------//
class person {
  eat() {
    console.log("eat");
  }

  sleep() {
    console.log("sleep");
  }  
}

class engineer extends person {
  work() {
    console.log("Solver of all problems");
  }
}

let nisarg = new engineer;
