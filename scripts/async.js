async function hola() {
  console.log("Hello World!");
}

async function weatherApi(dataId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data:", dataId);
      resolve(200);
    }, 5000);
  });
}

async function getData() {
  console.log("Getting data 1...");
  await weatherApi(211);
  console.log("Getting data 2...");
  await weatherApi(521);
}

getData();
