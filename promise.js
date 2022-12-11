(async ()=>{
    
    //declare function, this line will not be executed
    //How to defind a promise??
    const wait = (ms) => new Promise((res) => setTimeout(res, ms));

    //declare function, this part will not be executed
    const fn = async () => {
     console.log("start");
     await wait(100);
     console.log("end");
    }

    //fn() will execute
    //await fn();

    console.log("1");


    const fnProm = fn;// this line is trick, here fn is executed
    console.log("2");
    await fnProm();  // actually, it will stop at line 10, and the line 9 will be executed
    console.log("3");
})()

console.log("4");

// 1,2,star,4,end,3
// study carefully, not just stop when it reach a "await" function, but stop until reach a "promise"
//