// JavaScript Variables

/*
 * javascript variable names are case-sensitive
 ! variable names cannot contain spaces.
 * variable cannot be the same as reserved keywords such as `if` or `const`.
 * By convention, javascript variables names are written in camelCase.
 * variable should be given descriptive names that indicate there content and usage (e.g.`sellingPrice` and `costPrice` rather than `x` and `y`).
 * You can not add number first
 * _ , $ is acceptable but - is not acceptable
 */

/*
 * Var Variable
 * you can re declare
 * you can re assaign
 * Global Scooped
 * var is hosted
 */

var a = 10;
var a = 20;
a = "Bangladesh";
{
	var blocked = "30";
	console.log(a);
}

console.log(blocked);
console.log(a);

var country = "Bangladesh";
console.log(country);

// var countrys;
// console.log(countrys);
// countrys = "bangladesh";

let fruits = "mango";
console.log(`${fruits} is my favorite , ${fruits} I like it`);

/*
 * let Variable
 ! you can not re declare
 * you can re assaign
 ? Block Scooped
 ! let is not hosted
 */

let b = 10;
b = 11;

{
	console.log(b);
}

// console.log(people);
// let people = "Dhaka";

/*
 * const Variable
 ! you can not re declare
 ! you can not re assaign
 ? Block Scooped
 ! const is not hosted
 */

const c = 10;
{
	const d = 50;
	console.log(c);
	console.log(d);
}

const person = {
	firstName: "John",
	age: "22"
};
person.country = "bangladesh";
person.age = "333";

console.log(person);
