function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);


const h1 = document.querySelector("div.hello");

function helloTitleClick() {
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)) {
        h1.className.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}

function helloTitleClick(){
    h1.classList.toggle("clicked");
}

//toggle : classList에 clicked가 있는지 확인해서 있으면 제거, 없으면 추가 
// 스위치의 기능