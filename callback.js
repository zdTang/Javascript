var Arr = [2, 3, 4, 5];
//Callback function
function myCallback(x) {
  return x + 1;
}
// Don't border about .map() for now
console.log(Arr.map(myCallback));
console.log("bottom");

//[ 3, 4, 5, 6 ], bottom

/*========The following example is a synchronous callback, as it is executed immediately=========*/
// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
// Note, however, that callbacks are often used to continue code execution after an asynchronous operation has completed
// — these are called asynchronous callbacks. A good example is the callback functions executed inside a .then() block
// chained onto the end of a promise after that promise fulfills or rejects.
//This structure is used in many modern web APIs, such as fetch().

function greeting(name) {
  alert(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);
