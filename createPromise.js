// the "resolve" and "reject" should not have value at same time. either of them
// will have value when the Promise is resolved




const promiseA = new Promise((resolve, reject) => {
    // here, need to understand the "resolve" function.
    // it is not to be a real function.
    // what value you passed to this "resolve" function, this value will be the value of the promise
    resolve(777);


  });
  // At this point, "promiseA" is already settled.
  promiseA.then((val) => console.log("asynchronous logging has val:", val));
  console.log("immediate logging");
  
  // produces output in this order:
  // immediate logging
  // asynchronous logging has val: 777

  console.log("=====");

  const promiseB = new Promise((resolve, reject) => {
    // here, need to understand the "reject" function.
    // it is not to be a real function.
    // what value you passed to this "reject" function, this value will be the value of the error
    reject(777);


  });
  // At this point, "promiseA" is already settled.
  promiseB
  .then((val) => console.log("asynchronous logging has val:", val))
  .catch(val => console.log("error information is:", val));
  console.log("immediate loggingB");