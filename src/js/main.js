const toDo = ["Gå ut med hunden", "Laga mat", "Vattna blommorna", "Tvätta"]
const listitem = document.getElementById('myList')

function handletodo (e) {
e.target.style.textDecoration = "line-through"
}

for (let i = 0; i < toDo.length; i++) {
let item = document.createElement("li");
item.addEventListener("click", handletodo);
item.appendChild(document.createTextNode(toDo[i]))
listitem.appendChild(item);
}