const clock = document.querySelector("h2#clock");

// inteval : 매번 일어나야 하는 것

function sayHello() {
    console.log("hello");
}

setInterval(sayHello, 5000);
// setInterval(함수, 시간간격)

setTimeout(sayHello, 5000);

const date = new Date();
date.getHours();
date.getMinutes();
date.getDate();
date.getHours();
date.getSeconds();

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText(`${hours}:${minutes}:${seconds}`);
};
getClock();

setInterval(getClock, 1000);


// padStart(원하는 길이, 길이가 아닐 때 추가할 string)
"1".padStart(2, "0");
"hello".padStart(20,"x")

 