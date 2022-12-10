(async ()=>{
    const wait = (ms) => new Promise((res) => setTimeout(res, ms));


    const fn = async () => {
     console.log("starting");
     await wait(100);
     console.log("end");
    }
    await fn();
    console.log("after");
})()

