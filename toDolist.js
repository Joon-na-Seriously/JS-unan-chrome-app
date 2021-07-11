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
    toDos = toDos.filter((toDo) => toDo.id !== li.id);
}
function paintToDo(newTodo) {
 console.log("i will paint",);
 const li = document.createElement("li");
 li.id = newTodo.id;
 const span = document.createElement("span");
 span.innerText = newTodo; 
 const button = document.createElement("button");
 button.innerText = "🤢";
 button.addEventListener("click",deleteToDo );
li.appendChild(span);
li.appendChild(button);

console.log(li);  
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    console.log(toDoInput.value);
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id : Date.now(),
    };
 
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
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
    parsedToDos.forEach(paintToDo);

    ///parsedToDos.forEach((item) => console.log("asda", item));
}

 function sexyFilter(item){
     return item !==3

}
[1, 2, 3, 4, 5].filter(sexyFilter);
/// [1,2,3,4].filter(sexyFilter)

///sexyFilter(1) = 1
///sexyFilter(2) = 2
///sexyFilter(3) = 3
///sexyFilter(4) = 4

 