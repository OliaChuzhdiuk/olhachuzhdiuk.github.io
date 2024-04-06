const ul = document.querySelector("ul");
const input = document.getElementById("item");

let itemsArray = JSON.parse(localStorage.getItem("items")) || [];
function addTask(text) {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
}
itemsArray.forEach((item) => {
  addTask(item);
});
function add() {
  const itemText = input.value.trim();
  if (itemText !== "") {
    itemsArray.push(itemText);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    addTask(itemText);
    input.value = "";
  }
}
function del() {
  localStorage.removeItem("items");
  itemsArray = [];
  ul.innerHTML = "";
}
