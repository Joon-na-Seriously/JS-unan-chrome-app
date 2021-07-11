const greeting = document.querySelector("#greeting")


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
    loginForm.classList.add(HIDDEN_CLASSNAME );
    greeting.innerText = "hello" + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);

} 