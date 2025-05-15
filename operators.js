//연산자 
// 산술연산자 덧 뺼 곱 나 나
console.log(10+10); //덧셈
console.log(10-10); //뺄셈
console.log(10*10); //곱셈
console.log(10/10); //나눗셈
console.log(10%10); //나머지

console.log(10 * (10+10));

console.log('---------------------');


//증가와 감소

let number = 1;

number++;
console.log(number);

number--;
console.log(number);

console.log('---------------------');

// 연산자의 위치

let result = 1;
console.log(result);

result = number++;      
console.log(result,number);

result = number--;      
console.log(result,number);

result = ++ number;      
console.log(result,number);

result = -- number;      
console.log(result,number); 

console.log('---------------------');

// 숫자 타입이 아닌 타입에 +,-를 사용하면 결과는?

let sample = '99';

console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample); 

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);


sample = '손흥민';
console.log(sample);

console.log('---------------------');

// 할단 연산자

number = 100;

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

console.log('---------------------');

// 비교 연산자
//  1) 값의 비교
//  2) 값과 타입의 비교

console.log(5 == 5);
console.log('5' == 5);
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');

console.log(5 === 5);
console.log('5' === 5);
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');

console.log(5 != 5);
console.log('5' != 5);
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');

console.log(5 !== 5);
console.log('5' !== 5);
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');

console.log('---------------------');

// 대소 관계 비교 연산자 

console.log(100>1);
console.log(100<1);
console.log(100>=1);
console.log(100<=1);

console.log('---------------------');

// 삼항 조건 연산자

console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');
// 왼쪽은 true일 떄 나오고 오른쪽은 false일 때 나옴

console.log('---------------------');

//논리 연산자 &&(and), ||(or)
console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || false);
console.log(true || true);
console.log(false || false); 
console.log('---------------------');
console.log(10 > 1 || 20 < 2);

// 단축평가
// &&를 사용 시 좌측이 true면 우측 값 반환
// &&를 사용 시 좌측이 false면 좌측 값 반환
// ||를 사용 시 좌측이 true면 좌측 값 반환
// ||를 사용 시 좌측이 false면 우측 값 반환

console.log('---------------------');
console.log(true && '호날두');
console.log(false && '호날두');
console.log(true || '메시');
console.log(false || '메시');

console.log(true && true && '아이브');
console.log(true && false && '아이브');

console.log(false || true || '아이브');
console.log(false || false || '아이브');

// 지수 연산자  **제곱
console.log(2 ** 2);
console.log(2 ** 4);

// null 연산자
let name;
console.log(name);

name = name ?? '방재운';
console.log(name);

let name2;
name2 ??= '손흥민';
console.log(name2);