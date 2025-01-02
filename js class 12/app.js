// JavaScript Eevents

function subscribe() {
	document.getElementById("text").innerHTML = "Subscribed";
	document.getElementById("btn").innerHTML = "Subscribed";
	document.getElementById("btn").style.backgroundColor = "#262626";
}

function subscribe2() {
	document.getElementById("text2").innerHTML = "Subscribed";
	document.getElementById("btn2").innerHTML = "Subscribed";
	document.getElementById("btn2").style.backgroundColor = "#262626";
}

function subscribe3() {
	document.getElementById("text3").innerHTML = "Subscribed";
	document.getElementById("btn3").innerHTML = "Subscribed";
	document.getElementById("btn3").style.backgroundColor = "#262626";
}

function subscribe4() {
	document.getElementById("text4").innerHTML = "Subscribed";
	document.getElementById("btn4").innerHTML = "Subscribed";
	document.getElementById("btn4").style.backgroundColor = "#262626";
}

function subscribe5() {
	document.getElementById("text5").innerHTML = "Subscribed";
	document.getElementById("btn5").innerHTML = "Subscribed";
	document.getElementById("btn5").style.backgroundColor = "#262626";
}

function like() {
	document.getElementById("like").innerHTML =
		'<i class="fa-solid fa-thumbs-up"></i> Liked';
	document.getElementById("like").style.backgroundColor = "#262626";
}

function keyPress() {
	document.getElementById("text6").innerHTML = "key Press 😀";
}

function onLoad() {
	alert("Testing javascript Onload");
	document.getElementById("text7").innerHTML = "Website Loeaded Properly 😀";
}

document.getElementById("button").onclick = function () {
	document.getElementById("button").innerHTML = "Subscribed 😍";
};
