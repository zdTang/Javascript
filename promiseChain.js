const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);

function handleFulfilledA(data) {
  console.log(data);
  throw "early error";
}
function handleFulfilledB(data) {
  console.log(data);
  return 200;
}
function handleFulfilledC(data) {
  console.log(data);
  throw "error";
}
function handleRejectedAny(data) {
  console.log(data);
}

//foo
//early error
