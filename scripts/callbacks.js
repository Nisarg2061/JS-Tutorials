//-----------------------------------------------------------------------------------------//
// console.log("1");
// console.log("2");
//
// setTimeout(() => {
//   console.log("Hello World!");
// }, 4500);
//
// console.log("3");
// console.log("4");
//-----------------------------------------------------------------------------------------//
// const sum = (a, b) => {
//   return a + b;
// };
//
// const diff = (a, b) => {
//   return a - b;
// };
//
// const calculator = (a, b, funcCallBack) => {
//   return funcCallBack(a, b);
// };
//
// console.log(calculator(1, 2, sum));
// console.log(calculator(2, 2, diff));
//-----------------------------------------------------------------------------------------//
const getData = (id, getNextData) => {
  setTimeout(() => {
    console.log("Data:", id);
    if (getNextData) {
      getNextData();
    }
  }, 3000);
}

getData(122, () => {
  console.log("getting data 2...");
  getData(222,  () => {
    console.log("getting data 3...");
    getData(223);
  });
});
