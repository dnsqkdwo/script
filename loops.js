// 1) for 2) while

for(let i = 0; i < 10;i++) {
    console.log(i);
}

for( let i = 0; i< 3; i++) {
    console.log(i);
}

let spuare = '';
let side = 6;

for (let i = 0; i < side; i++) {
    for (let j = 0; j < side; j++){
        spuare += '*';
    }
    spuare += '\n'
}
console.log(spuare);

console.log('---------------');

// for~in

const me = {
    name : '방재운',
    year : 2008,
    school : '인평고'
}

for(let key in me){
    console.log(key)
}

const soccerArray = ['호날두','메시','손흥민','살라','이강인'];

for(let key in soccerArray) {
    console.log(key);
    console.log(`${key}:${soccerArray[key]}`);
}


//for~of

 for(let value of soccerArray){
    console.log(value);
 }

 console.log('---------------');



//while

let number = 0;

while(number < 10) {
    number++;
}
console.log(number);

console.log('---------------');


// break

for(let i = 0; i < 10; i++){
    if (i === 5) {
        break;
    }
    console.log(i);
}

console.log('---------------');

number = 0;

while(number < 10){
    if(number === 5){
        break;
    }
    number++;
    console.log(number);
}

// continue
console.log('---------------');

for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}

console.log('---------------');

number = 0;

while(number < 10) {
    number++;
    if(number === 5){
        continue;
    }
    console.log(number);
}


