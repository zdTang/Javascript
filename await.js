(async ()=>{
    const asyncFn = async () => {
        return 5;
       }
       let result=await asyncFn();
       console.log(result);
    
       console.log("ok inside");
       
       // 5
})();

console.log("ok outside");

// the order is 'ok outside',5, 'ok inside'

// In short, await only blocks the code(s) that's after the await statement in the current async function, not the whole thread.
// this example will prove this 
   