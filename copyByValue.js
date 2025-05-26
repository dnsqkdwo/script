// copy by value 값에 의한 전달
// copy by referenve 참조에 의한 전달

let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 방재운입니다.';
console.log(original);
console.log(clone);

let originalObj = {
    name: '방재운',
    school: '인평고'
};

let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

originalObj['school'] = '코드팩토리';

console.log(originalObj);
console.log(cloneObj);

// originalObj = {
//     name: '방재운',
//     group: '코드팩토리',
// }

// cloneObj = {
//     name: '방재운',
//     group: '코드팩토리',
// }

console.log(originalObj === cloneObj);


const yuJin1 = {
    name: '안유진',
    group: '아이브',  
};

const yuJin2 = yuJin1;
const yuJin3 = {
    name: '안유진',
    group: '아이브',  
};

console.log(yuJin1 === yuJin2);
console.log(yuJin3 === yuJin2);
console.log(yuJin1 === yuJin3);

// spread operator
const yuJin4 = {
    ...yuJin3,
};
console.log(yuJin4);

console.log(yuJin4 === yuJin3);

const yuJin5 = {
    year: 2003,
    ...yuJin3,
};
console.log(yuJin5);


// 이름 바뀌지 않는 이유 = 순서를 정해야함 즉, name: '코드팩토리',을 아래에 넣으면 실행이 잘된다.
const yuJin6 = {
    name: '코드팩토리',
    ...yuJin3,
};
console.log(yuJin6);

const yuJin7 = {
    ...yuJin3,
    name: '코드팩토리',
};
console.log(yuJin7);
