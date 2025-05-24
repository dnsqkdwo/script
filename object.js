// Object / 객체 ++중요++
// key : value pair
let jaeWoon = {
    name : '방재운',
    school : '인평',
    study: function() {
        return `${this.name}이 js공부를 합니다.`;
    }
};

console.log(jaeWoon);

console.log(jaeWoon.name);
console.log(jaeWoon['name']);

const key = 'name';
console.log(jaeWoon[key]);

console.log(jaeWoon.study());

const nameKey = 'name';
const nameValue = '방재운';

const schoolKey = 'school';
const schoolValue = '인평';

const jaeWoon2 = {
    [nameKey]: nameValue,
    [schoolKey]: schoolValue ,
    study: function() {
        return `${this.name}이 js공부를 합니다.`;
    }
}

console.log(jaeWoon2);
console.log(jaeWoon.study());

jaeWoon2['school'] = '코드팩토리';
console.log(jaeWoon2);

jaeWoon2['englishName'] = 'Bang jae woon';
console.log(jaeWoon2);

delete jaeWoon2['englishName'];
console.log(jaeWoon2);

console.log('--------------');

/**
 * const로 선언한 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */

const wonYoung = {
    name: '장원영',
    group: '아이브',
}

console.log(wonYoung);

wonYoung['group'] = '코드팩토리';
console.log(wonYoung);

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(wonYoung));

/**
 * 모든 벨류값 다 가져오기
 */
console.log(Object.values(wonYoung));

const name = '방재운';
const jaeWoon3 = {
    name,
};
console.log(jaeWoon3);