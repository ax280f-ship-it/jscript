'use strict';

/*
alert(2)
[0,3].push()
*/
// a=5;
// console.log(a);

var number = 5;
var string = "Hello Anna";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4 / 0); // ошибка Infinity
console.log('string' * 9); // ошибка Nan
var something;
console.log(something);

let person = {
    name: "John",
    age: 25,
    isMarried: false
};

// console.log(person["name"]);

// let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

// console.log(arr[0]);

// // alert(string);
//  let answer = confirm("Are you here ?");

// console.log(answer); 

//  let answer = +prompt("Вы замужем ?", "Да");

// console.log(typeof(answer)); 

// console.log ( 4 + +'- object');

let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--);

console.log(5 % 3); // Остаток от деления

console.log("2" === 2);

let isChecked = false,
    isClose = false;

    console.log(isChecked || !isClose); 