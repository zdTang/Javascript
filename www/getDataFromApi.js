const getButton = document.getElementById("get");
const putButton = document.getElementById("put");
const postButton = document.getElementById("post");
const deleteButton = document.getElementById("delete");
const contentArea = document.getElementById("content");

getButton.addEventListener("click", function () {
  getData("/api", { name: "mike" })
  .then((x) => {
    let {username,key}=x.data;
    contentArea.innerHTML = username+key.toString()})
  .catch(error=>console.log(error));
  ;
});

postButton.addEventListener("click", function () {
  postData("/api", { name: "mike" })
  .then((x) => {
    console.log(x.data);
    //{username,key} = x.data;
    contentArea.innerHTML = username+key.toString()})
  .catch(error=>console.log(error));
});

putButton.addEventListener("click", function () {
  putData("/api", { name: "mike" })
  .then((x) => {contentArea.innerHTML = x.data})
  .catch(error=>console.log(error));
});


deleteButton.addEventListener("click", function () {
  deleteData("/api", { name: "mike" })
  .then((x) => {contentArea.innerHTML = x.data})
  .catch(error=>console.log(error));
});
