/* const toDo = ["Städa", "Plugga Js", "Laga mat", "Vattna blommorna", "Tvätta"];
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
 */

function printTodoList () {
  let todoList = document.getElementById("todo-list");
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    let todoList = document.getElementById("todo-list");
    let todoLi = document.createElement("li");
    todoLi.addEventListener("click", handletodo);
    todoLi.innerHTML = `${todo.todoName}`;
    todoList.appendChild(todoLi);
    if (todo.todoDone == true) {
      todoLi.style.textDecoration = "line-through";
    }
  }
}

function handletodo(e) {
  const itemName = e.target.innerText;
  for (let i = 0; i < todos.length; i++) {
    const element = todos[i];
    if (element.todoName === itemName) {
      element.todoDone = true;
    }
  }

printTodoList ()
}

class Todo {
  todoName;
  todoDone;
  constructor(todoName, todoDone) {
    this.todoName = todoName;
    this.todoDone = todoDone;
  }
}

let todos = [
  new Todo("Gå ut med hunden", false),
  new Todo("Vattna blommorna", false),
  new Todo("Städa", false),
  new Todo("Plugga Js", false),
  new Todo("Tvätta", false),
  new Todo("Laga mat", false),
];

printTodoList ();
