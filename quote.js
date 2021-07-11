Math.random() * 10
Math. round // 반올림 함수
Math.ceil() // 올림
Math.floor() //내림

const quotes = [
    {a : 1},
    {b : 2},
    {c : 3},
    {d : 4},
    {e : 5 },
    {f : 6},
    {g : 7},
    {h : 8},
    {i : 9},
    {j : 10},
    {k :11},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
 
console.log(Math.floor(Math.random()*10));

const todayQuote = quotes[Math.floor(Math.random() * quotes.random()*10)];



