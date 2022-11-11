const toDo = ["Städa", "Plugga Js", "Laga mat", "Vattna blommorna", "Tvätta"];
const done = [];
const listItem = document.getElementById("myList");
const listDone = document.getElementById("listDone");

function handletodo(e) {
  e.target.style.textDecoration = "line-through";
  let node = e.target.cloneNode(true);
  listDone.appendChild(node);
  e.target.remove();
}

for (let i = 0; i < toDo.length; i++) {
  let item = document.createElement("li");
  item.addEventListener("click", handletodo);
  item.appendChild(document.createTextNode(toDo[i]));
  listItem.appendChild(item);
}
