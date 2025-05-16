// if
let number = 7;
if (number % 2 === 0) {
    console.log('number변수는 짝수입니다');
}

else {
    console.log('number변수는 홀수입니다');
}

if (number % 2 === 0) {
    console.log('number변수는 2의 배수입니다');
} else if(number % 3 ===0) {
    console.log('3의 배수입니다');
} else if(number % 4 ===0) {
    console.log('4의 배수입니다');
} else if(number % 5 ===0) {
    console.log('5의 배수입니다');
} 

else {
    console.log('2, 3, 4, 5의 배수가 아닙니다');
} 

// switch

const engDay = 'tuesday'

let korDay;

switch(engDay){
    case'monday':
        korDay = '월요일';
        break;
    case 'tuesday':
        korDay = '화요일';
        break;
        
    case 'wednesday':
        korDay = '수요일'
        break;
        
    case 'thursday':
        korDay = '목요일';
        break;

    case 'friday':
        korDay = '금요일';
        break;
    default:
        korDay = '주말';
}

console.log(korDay);