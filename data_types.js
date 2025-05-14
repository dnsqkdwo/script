//**
// Data Types
// 
// 1) Number (숫자)
// 2) String (문자열)
// 3) Boolean (불리언)
// 4) undefined (언디파인드)
// 5) null (널)
// 6) Symbol (심볼) 
// 
// 
// 7) Object (객체)
//      Fuction
//      Array
//      Object
//    */

//넘버 타입 

const age = 18;
const tempature = 24;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('----------------');

// 문자열 타입

const codeFactory = "코드팩토리";
console.log(typeof codeFactory);

const ive = "'아이브'안유진"
console.log(ive);

const group = "아이브";
console.log(group + ' 안유진');

// 출력 값은 같지만 위보다 쉬운 방식

console.log(`${group} 장원영`)
console.log('-----------------')


// Boolean 타입

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log('-------------');

//undefined 타입

let noInit;
console.log(noInit);
console.log('------------');

//null 타입

let init = null;
console.log(init);
console.log('------------');

//symbol 타입

const test1 = 1;
const test2 = 1;

console.log(test1 === test2)

const symbol1 = Symbol(1);
const symbol2 = Symbol(1);

console.log(symbol1 === symbol2);
console.log('------------');

//object 타입 

const dictionary = {
    red: '붉은색', 
    orange: '주황색',
    yellow: '노란색',
};

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);
console.log('------------');

// Array 타입

const niobeMembersArray = [
    '방재운',
    '김진성',
    '윤성환',
    '홍성준',
];

console.log(niobeMembersArray);
console.log(niobeMembersArray[0]);
console.log(niobeMembersArray[3]);


niobeMembersArray[2] = '오지율';
console.log(niobeMembersArray);
console.log(typeof niobeMembersArray);




