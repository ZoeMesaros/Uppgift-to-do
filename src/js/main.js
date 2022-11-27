function printTodoList() {
  let todoList = document.getElementById("todo-list");
  let doneList = document.getElementById("todo-done");
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  while (doneList.firstChild) {
    doneList.removeChild(doneList.firstChild);
  }
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    let todoLi = document.createElement("li");
    todoLi.addEventListener("click", handletodo);
    todoLi.innerHTML = `${todo.todoName}`;
    if (todo.todoDone == true) {
      doneList.appendChild(todoLi);
      todoLi.style.textDecoration = "line-through";
    } else {
      todoList.appendChild(todoLi);
    }
  }
}

const myButton = document.getElementById("myButton");
myButton.addEventListener("click", pushtodo);

function pushtodo() {
  const inputText = document.getElementById("inputText").value;
  document.getElementById("inputText").value = "";
  todos.push(new Todo(inputText, false));
  printTodoList();
  for (let i = 0; i < todos.length; i++) {
    const element = todos[i];
  }
}

function handletodo(e) {
  const itemName = e.target.innerText;
  for (let i = 0; i < todos.length; i++) {
    const element = todos[i];
    if (element.todoName === itemName) {
      element.todoDone = !element.todoDone;
    }
  }
  printTodoList();
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
  new Todo("Plugga JS", false),
  new Todo("Tvätta", false),
  new Todo("Laga mat", false),
];

const sortButton = document.getElementById("sortButton");
sortButton.addEventListener("click", todoSort);

function todoSort() {
  todos.sort(function (a, b) {
    if (a.todoName < b.todoName) {
      return -1;
    }
    if (a.todoName > b.todoName) {
      return 1;
    }
    return 0;
  });

  printTodoList();
}

printTodoList();
