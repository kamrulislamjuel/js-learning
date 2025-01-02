// JavaScript Data Types
let firstName = "Kamrul";
firstName = "islam";
// let fullName = 'My name is \'Kamrul\'';
let fullName = "My name is'kamrul'";

let finalName = `My name is ${firstName}`;
console.log(finalName);

let age = 30;
let age2 = 35;
console.log(age + age2);
console.log(typeof age);

let calculation = age + age2 + firstName + age + age2;
console.log(calculation);
console.log(typeof calculation);

let numberBig = 999999999999999999n;
let numberBig2 = 999999999999999999n;
console.log(numberBig);
console.log(numberBig * numberBig2);

let numberSmall = 9n;
let numberSmall2 = 5n;
console.log(numberSmall / numberSmall2);

let numberSmall3 = 9;
let numberSmall4 = 5;
console.log(numberSmall3 / numberSmall4);

let ifAdult = false;
console.log(ifAdult);
console.log(typeof ifAdult);

let someInfo = null;
console.log(someInfo);
console.log(typeof someInfo);

// Array

let fruits = ["apple", "lemon", "peer", "oranges", , 32, true, undefined, null];
fruits[4] = "mengo";
console.log(fruits);
console.log(typeof fruits);

// Object

let person = {
	name: "John",
	age: 30,
	dateOfBirth: 2006
};
console.log(person);
console.log(typeof person);
