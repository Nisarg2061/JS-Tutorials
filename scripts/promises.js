//-----------------------------------------------------------------------------------------//
// function getData(dataId, nextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data:",dataId);
//       resolve("success");
//       if(nextData) {
//         nextData();
//       }
//     }, 5000);
//   });
// };
// //-----------------------------------------------------------------------------------------//
// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     if(true) {
//       console.log("Got response.");
//       resolve("success");
//     } else {
//       console.log("Got no response");
//       reject("Fail");
//     }
//   });
// };
// //-----------------------------------------------------------------------------------------//
// let p = getPromise();
// p.then(() => {
//   console.log("Promise fulfilled.");
// });
// p.catch(() => {
//   console.log("Rejected.");
// })
//-----------------------------------------------------------------------------------------//
const getData = (dataId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(dataId);
      resolve("success");
    }, 2000);
  });
};

getData(1)
  .then((res) => {
    console.log(res)
    return getData(2)
  })
  .then((res) => {
    console.log(res)
  });
