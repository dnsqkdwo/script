var nums = [100,200,300,400,500];
nums.pop();
nums.pop();
console.log(nums);

console.log('--------------------------');

var arr = [200,100,300];
arr.splice(2, 0, 10000); 
console.log(arr);

var arr = [100, 200, 300];
console.log(typeof(arr));

console.log('--------------------------');

var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i;
}

console.log(a+b);

var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']);

console.log('--------------------------');

var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;

console.log(result);

console.log('--------------------------');

// let star = '';

// for (let i = 1; i <= 10; i+=2) {
//     for (let j = 1; j <= i; j++) {
//         star += '*';
//     }
//     star += '\n'; 
// }

// console.log(star);

console.log('--------------------------');

let s = 0;

for(let i = 1;i <= 100; i++) {
    s += i
}

console.log(s);


// 11번까지 내용




