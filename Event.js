const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event)
    alert("clicked!")
}

link.addEventListener("click", handleLinkClick);

handleLinkClick( )

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    loginForm.classList.add(HIDDEN_CLASSNAME );
    greeting.innerText = `Hello ${username}`;
    paintGreetings(username);

} 
// `` 변수와 string을 합쳐주는 방법. 변수는 ${변수명}

loginForm.addEventListener("submit", onLoginSubmit);

// localStorage.setItem("username", "nico")
// localStorage.removeItem
// localStorage.getItem

function paintGreetings(username) {
    greeting.classList.remove(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    /// show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    /// show the greetings
    paintGreetings(savedUsername)
    greeting.innerText = `Hello ${username}`;
}  