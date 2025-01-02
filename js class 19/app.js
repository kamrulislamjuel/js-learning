// JavaScript loop

let car = ["BMW", "Volvo", "Toyota", "Fotda", "Tesla", "Lamburgini"];
car.push("saab");

console.log(car[0]);
console.log(car[1]);

for (let i = 0; i < car.length; i++) {
	console.log(car[i]);
}

// for in loop

let person = {
	name: "Kamrul",
	age: 18,
	country: "Bangladesh"
};

for (let i in person) {
	let capLetter = i.charAt(0).toUpperCase() + i.slice(1);
	console.log(capLetter + ": " + person[i]);
}

// for Each Method

car.forEach(function (i) {
	console.log(i);
});

// for of

for (let i of car) {
	console.log(i);
}

// while loop

let num = 0;
while (num < 10) {
	console.log(num);
	num++;
}
