const age = prompt("How old are you?"); // prompt는 답을 할 때 까지, 동작이 멈춰있다. prompt 를 안쓰는 이유 메세지 창이 안이쁘다. css 적용이 안됨.

// typeof : 데이터의 타입을 보여주는 함수. typeof x

parseInt("15");
console.log(parseInt("15"));


const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

if(isNaN(age)) {
    console.log("Please write a number");
/// condition === true -> condition은 boolean으로 판별가능해야 함.
} else {console.log("Thank you for writing your age");
    // condition === false
};

if (isNaN(age) || age < 0) {
    console.log("Please write a number");
} else if (age < 18) {
    console.log("You are too young");
} else if (age >= 18 && age <= 50 ){
console.log("you can drink");
} else {
    console.log("You can drink");
}

// && and 기호
// true || true === true
// true || false === true
// false || false === false

// === 같다. !== 같지 않다.
// >= <= > < 
// || or
