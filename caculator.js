const calculator = {
    add : function(a,b) {
        console.log(a + b);
    },

    subtraction : function(a,b) {
        console.log(a - b);
    },

    multiplication : function(a,b) {
        console.log(a * b);
    },

    division : function(a,b) {
        console.log(a / b);
    },

    power : function(a,b) {
        console.log(a**b);
    },

    remainder : function(a,b) {
        console.log(a % b);
    },

};

// 만약 함수의 결괏값을 보기 원한다면, return. return은 함수에 새로운 반환값을 부여한다. 함숫값보다는 함수의 작동만을 원한다면 return을 쓰지않아도 된다.
//return을 하지 않는다면, 동작은 할지라도 console에는 undefined로 표시된다.


const calculator2 = {
    add : function(a,b) {
        return a + b;
    },

    subtraction : function(a,b) {
        return a - b;
    },

    multiplication : function(a,b) {
        return a * b;
    },

    division : function(a,b) {
        console.log(a / b);
    },

    power : function(a,b) {
        return a**b ;
    },

    remainder : function(a,b) {
        return a % b;
    },

};

// ** return을 한번 하면 함수는 끝남. return뒤의 code는 실행되지 않는다.