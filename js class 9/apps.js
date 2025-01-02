// JavaScript Functions

function myFunction() {
	console.log("Hello world!");
}
myFunction();
myFunction();

function sumNumbers(num1, num2, num3 = 2003) {
	console.log(
		"my name is " + num1 + " my age " + num2 + "My Date of Birth " + num3
	);
}
sumNumbers("kamrul", 18, 2006);
sumNumbers("arman", 20);

function isSubscribed() {
	console.log("You have successfully subscribed!");
}
document.getElementById("btn").addEventListener("click", isSubscribed);

(function (message) {
	console.log("I am self-Invokeing Function", message);
})("message");

let maths = function (x, y) {
	console.log("type number");
	return x * y;
};
console.log(maths(5, 10));
console.log(maths(10, 10));
console.log(maths(15, 10));

function newFuncs() {
	let firstName = "kamrul";
	console.log(firstName);
}
newFuncs();

let numbers = [4, 5, 6, 7, 8];
let sqNumbers = numbers.map(function (number) {
	return number * number;
});

console.log(sqNumbers);

/*
let add = function (x, y) {
    return x + y;
};
console.log(add(5,6))
*/

let add = (x, y) => x + y;
console.log(add(5, 6));

function greet(firstName){
    function sayHello() {
        alert('Hello' + firstName);
    }
    return sayHello();
}
greet('kamrul');
