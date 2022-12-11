const getButton = document.getElementById("get");
const putButton = document.getElementById("put");
const postButton = document.getElementById("post");
const deleteButton = document.getElementById("delete");
const contentArea = document.getElementById("content");

getButton.addEventListener("click", function () {
  getData("/api", { name: "mike" }).then((x) => console.log(x));
  contentArea.innerHTML = "get";
});
putButton.addEventListener("click", function () {
  contentArea.innerHTML = "put";
});
postButton.addEventListener("click", function () {
  contentArea.innerHTML = "post";
});
deleteButton.addEventListener("click", function () {
  contentArea.innerHTML = "delete";
});
