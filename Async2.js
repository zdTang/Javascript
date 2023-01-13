const fn = () => {
  return 5;
};

//===async function

const Fnasync = async () => {
  return 8;
};

// async function will return a "Promise",which means in future
console.log(Fnasync());

(async () => {
  console.log(await Fnasync());
  console.log(`when will I run?`);
})();

//==========
//An async function still has a return value, and the Promise holds this result.
//To get access to the value, attach a callback using the then() function.
//This callback will be called with the result of the function.
// to read the result of a promise, need use then()
Fnasync().then((x) => {
  console.log(`at the bottom--${x}`);
});

console.log("see who is the first and who is the last!"); //5, Promise,"see who...",8
