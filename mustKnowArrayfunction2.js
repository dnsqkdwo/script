let langs = [
    '파이썬',
    '자바스크립트',
    '자바',
    'C',
    'C++'
];

console.log(langs);


// push()
console.log(langs.push('방재운'));
console.log(langs);

console.log('--------------');

// pop()
console.log(langs.pop());
console.log(langs);


console.log('--------------');

// shift()
console.log(langs.shift());
console.log(langs);

// unshift()
console.log(langs.unshift('파이썬'));
console.log(langs);

console.log('--------------');

console.log(langs.splice(0, 3));
console.log(langs);

langs = [
    '파이썬',
    '자바스크립트',
    '자바',
    'C',
    'C++'
];

// concat ()

console.log(langs.concat('코드팩토리'));
console.log(langs);

// slice ()
console.log(langs.slice(2, 4));
console.log(langs);

// spread operator

let langs2 = [
    ...langs,
];

console.log(langs2);

console.log('--------------');

let langs3 = langs;

console.log(langs3);

console.log(langs === langs3);


// join ()

console.log(langs.join());
console.log(langs.join('/'));
console.log(langs.join(', '));

// sort ()
// 오름차순
console.log(langs.sort());

console.log(langs.reverse());

let numbers = [
    5,1,2,7,23,
];
console.log(numbers);
// a, b를 비교했을때 
// 1) a를 b보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b)=>{
    return a > b ? 1 : -1;
})
console.log(numbers);

numbers.sort((a, b)=>{
    return a > b ? -1 : 1;
})
console.log(numbers);

// map ()
console.log('--------------');
console.log(langs.map((x)=> x));

console.log(langs.map((x)=> `언어: ${x}`));

console.log(langs.map((x)=> {
    if(x === '자바스크립트') {
        return `언어: ${x}`;
    }else {
        return x ;
    }
}));

console.log(langs);

// filter ()
console.log('--------------');
number = [1,7,5,4,2];
console.log(number.filter((x)=> x % 2 === 0));


// find()
console.log(number.find((x)=> x % 2 === 0));

// findIndex()

console.log(number.findIndex((x)=> x % 2 === 0));

// reduce()
console.log(number.reduce((p, n) => p + n ,0))