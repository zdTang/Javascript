var name="mike";
(async (n)=>{
    let myname=n;
    const asyncFn = async (m) => {
        return m;
       }
       let result=await asyncFn(myname);
       console.log(result);
    
       console.log("ok inside");
       
       // 5
})(name);

console.log("ok outside");

// the order is 'ok outside',5, 'ok inside'

// In short, await only blocks the code(s) that's after the await statement in the current async function, not the whole thread.
// this example will prove this 
   