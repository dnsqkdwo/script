// 함수
// 만약 2라는 숫자에 * 10/ 2 % 3 스트링으로 변환해서 변환받고 싶다면 어떻게 해야할까?
console.log((2 * 10/ 2%3).toString());
console.log((3 * 10/ 2%3).toString());

// 비슷한 코드를 반복하기보단 함수 사용이 훨씬 좋음

function calculate () {
    console.log((3 * 10/ 2%3).toString());
}

// calculate ();

function calculate(number) {
    console.log((number * 10/ 2%3).toString());
}

// 함수에서 입력받는 값에대한 정의를 Parament라고 한다.
// 실제 입력하는 값은 argument라고 한다. 
calculate (5);
calculate (4);

function multip (x, y) {
    console.log(x * y);
}

multip(3, 4);
// 위와 같이 Parament를 여러개 받는 것도 가능 

function multip (x, y = 10) {
    console.log(x * y);
}

multip(10);

console.log('-------------------')

// 반환 받기 return

function multip (x, y) {
    return x * y;
}

const result = multip(3, 4);
console.log(result);

const result2 = multip(5, 3);
console.log(result2); 

// Arrow 함수 

const multip2 = (x, y) => {
    return x * y;
}
console.log(multip2(3, 4));


const multip3 = (x, y) => x * y;
console.log(multip3(6, 7));

const multip4 = x => x * 3;
console.log(multip4(3));

const multip5 = x => y => z => `x: ${x} y: ${y} z: ${z}`
console.log(multip5(2)(6)(20));

const multip6 = function(x, y, z) {
    console.log(arguments);
    return x * y * z;
}

console.log(multip6(3, 4, 5) );



// 즉시실행 함수 

(function (x, y) {
    console.log(x * y);
}) (4, 5);

console.log(typeof multip);


