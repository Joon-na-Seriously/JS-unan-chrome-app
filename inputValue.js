const loginForm = document.querySelector("#login_form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick() {
    const username = loginInput.value;
    console.log("click! " , loginInput.value);
    if (value === ""){
        alert ("please write your name");
    } else if (username.length > 15) {
        alert("Your name is too long");
    }
}

function onLoginSubmit(tomato) {
   tomato.preventDefault();
   console.log(tomato);
}

loginForm.addEventListener("submit", onLoginSubmit);
loginButton.addEventListener("click", onLoginBtnClick);

 