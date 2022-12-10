const fn = () => {
 return 5;
}

// A Normal function will return a value directly
console.log(fn()); //5

//===async function

const Fnasync = async () => {
 return 8;
}

// async function will return a "Promise",which means in future
console.log(Fnasync());

//==========
//An async function still has a return value, and the Promise holds this result.
//To get access to the value, attach a callback using the then() function.
//This callback will be called with the result of the function.
// to read the result of a promise, need use then()
Fnasync().then(x=>console.log(x));


console.log("see who is the first and who is the last!")//5, Promise,"see who...",8

