// JavaScript Operator

/*
 * Arithmetic Operators
 */

let a = 50;
let b = 20;
let c = a % b;

console.log(c);

/*
let userInput = prompt("Enter a number");
let number = parseInt(userInput);
if (number % 2 === 0) {
	console.log(`${number} is even number`);
} else {
	console.log(`${number} is odd number`);
}
*/

let x = 10;
x = x + 1;
x++; // increment
console.log(`increment ${x}`);

let y = 20;
y = y - 1;
y--; // decrement
console.log(`decrement ${y}`);

/*
 * Comparison Operator
 */

let p = 5;
let q = 10;
console.log(p == q); //equal to
console.log(p === q); //equal value and equal type
console.log(p !== q); //not equal value or not equal type
console.log(p > q); //Greater than
console.log(p < q); //Less than
console.log(p <= q); //Less than or equal to
console.log(p >= q); //Greater than or equal to

/*
 * Logical Operators
 */

let m = true;
let n = false;
console.log(m && n); //logical AND
console.log(m || n); //logical OR
console.log(!m); //logical NOT

// && AND operator
// || OR operator
// !(p<q) NOT Operator

/*
 * Assignment Operators
 */

let j = 10;
let k = 20;

j = j + k;
j += k;

j = j - k;
j -= k;

j = j * k;
j *= k;

j = j / k;
j /= k;
j %= k;
j **= k;

console.log(j);

/*
 * Conditional (Ternary) operations
 */

let t = a < b ? `True` : `False`;
let g = a < b ? true : false;
console.log(t);

if (a > b) {
	console.log(`True`);
} else {
	console.log(`False`);
}
