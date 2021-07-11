const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
    localStorage.setItem("toDos", JSON.stringify(toDos));
    
}
// JSON.stringlify
// JSON.parse : string을 array로 만들어준다.

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}
function paintToDo(newTodo) {
 console.log("i will paint",)
 const li = document.createElement("li");
 const span = document.createElement("span");
 span.innerText = newTodo; 
 const button = document.createElement("button");
 button.innerText = "🤢";
 button.addEventListener("click",deleteToDo )
li.appendChild(span);
li.appendChild(button);

console.log(li);  
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    console.log(toDoInput.value);
    toDoInput.value = "";
    paintToDo(newTodo);
    toTos.push(newTodo);
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const SavedtoDos = localStorage.getItem(TODOS_KEY);

function sayHello(item) {
    console.log("say hello!")
}

if (savedToDos !== null)  {
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedtoDos);
    toDos = parsedToDos;
    parsedToDos.forEach((item) => console.log("asda", item));
    

}

sayHello("a")

