let age = 11;

if (age > 20) {
	console.log("You are a ready to open a google account");
} else if (age > 18) {
	console.log("you are a old");
} else {
	console.log("you are not ready");
}

let category = "bike";
let carName;

switch (category) {
	case "car":
		carName = "Tesla";
		break;
	case "bike":
		carName = "RTR 4V";
		break;
	default:
		carName = "Unknown";
}

console.log(carName);
