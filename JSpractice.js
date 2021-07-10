const title = document.getElementById("title");

title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);

const hellos = document.getElementsByClassName("hello");
const title = document.querySelector(".hello h1:first-child");

// query selector는 오직 첫번째 것만 가져옴.
// query selector는 CSS selector 자체를 전달한다. CSS 선택자에 맞춰서 작성하면 된다.

title.style.color = "blue";

function handleTitleClick() {
    console.log("title was clicked!");
    title.style.color = "blue";
}
title.addEventListener("click", handleTitleClick);

handleTitleClick()
