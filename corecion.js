// 타입변환 **명시적 **암묵적
let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적
let test = age + '';
console.log(typeof test, test);

console.log('98'+2);
console.log('98'*2);
console.log('98'-2);

// 명시적 몇가지 더
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0.99'));
console.log(typeof parseFloat('0'), parseFloat('0.99'));

// Boolean 타입
console.log(!!'sdfsdfsdf');
console.log(!!'');
console.log(!!0);
console.log(!!'0');
console.log(!!'false');
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log(!!{});
console.log(!![]);




