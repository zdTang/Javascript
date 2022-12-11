const express = require("express");
const app = express();

app.use(express.static("www")); // middleware for static files
app.use(express.json()); // middleware for json

app.get("/api", (req, res) => {
  console.log(req.query);
  //res.send("Success");
  let {name}=req.query;
  if(name){
    res.json({ username: 'Mike',key:123 })
  }
  else{
    res.json([{ username: 'Mike',key:123 },{ username: 'Bob',key:456}])
  }
});

app.post("/api", (req, res) => {
  console.log(req.body); // your JSON
  res.json({state:"success"}); 
});

app.put("/api", (req, res) => {
  console.log(req.body); // your JSON
  res.json({state:"success"}); 
});

app.delete("/api", (req, res) => {
  console.log(req.body); // {}
  console.log(req.query); // for delete, the parameter is here!
  res.json({state:"success"}); 
});

app.listen(8888, () => console.log(`Example app listening on port 8888!`));
