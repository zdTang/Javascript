const express = require("express");
const app = express();

app.use(express.static("www")); // middleware for static files
app.use(express.json()); // middleware for json

app.get("/api", (req, res) => {
  console.log(req.query);
  res.send("Success");
});

app.post("/api", (req, res) => {
  console.log(req.body); // your JSON
  res.send(req.body); // echo the result back
});

app.put("/api", (req, res) => {
  return res.send("Received a PUT HTTP method");
});

app.delete("/api", (req, res) => {
  return res.send("Received a DELETE HTTP method");
});

app.listen(8888, () => console.log(`Example app listening on port 8888!`));
