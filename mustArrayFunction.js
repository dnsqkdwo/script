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