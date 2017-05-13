
var time = 30;
var phase = 0;
var intervalId;
var wins = 0;
var losses = 0;
var unanswered = 0;






document.getElementById("question1").style.display = "none";
document.getElementById("question2").style.display = "none";
document.getElementById("question3").style.display = "none";
document.getElementById("question4").style.display = "none";
document.getElementById("question5").style.display = "none";
document.getElementById("question6").style.display = "none";
document.getElementById("question7").style.display = "none";
document.getElementById("question8").style.display = "none";
document.getElementById("question9").style.display = "none";
document.getElementById("question10").style.display = "none";
document.getElementById("endScreen").style.display = "none";
document.getElementById("question1correct").style.display = "none";
document.getElementById("question1outoftime").style.display = "none";
document.getElementById("question1incorrect").style.display = "none";
document.getElementById("question2correct").style.display = "none";
document.getElementById("question2outoftime").style.display = "none";
document.getElementById("question2incorrect").style.display = "none";
document.getElementById("question3correct").style.display = "none";
document.getElementById("question3outoftime").style.display = "none";
document.getElementById("question3incorrect").style.display = "none";
document.getElementById("question4correct").style.display = "none";
document.getElementById("question4outoftime").style.display = "none";
document.getElementById("question4incorrect").style.display = "none";
document.getElementById("question5correct").style.display = "none";
document.getElementById("question5outoftime").style.display = "none";
document.getElementById("question5incorrect").style.display = "none";
document.getElementById("question6correct").style.display = "none";
document.getElementById("question6outoftime").style.display = "none";
document.getElementById("question6incorrect").style.display = "none";
document.getElementById("question7correct").style.display = "none";
document.getElementById("question7outoftime").style.display = "none";
document.getElementById("question7incorrect").style.display = "none";
document.getElementById("question8correct").style.display = "none";
document.getElementById("question8outoftime").style.display = "none";
document.getElementById("question8incorrect").style.display = "none";
document.getElementById("question9correct").style.display = "none";
document.getElementById("question9outoftime").style.display = "none";
document.getElementById("question9incorrect").style.display = "none";
document.getElementById("question10correct").style.display = "none";
document.getElementById("question10outoftime").style.display = "none";
document.getElementById("question10incorrect").style.display = "none";

countdown1 = function () {
time --
console.log(time);
console.log("wins"+wins);
	console.log("losses"+losses);
	console.log("unanswered"+unanswered);
$("#theCountdown").html(time);

if (time === 0) {
document.getElementById("question1").style.display = "none";
document.getElementById("question1outoftime").style.display = "initial";
unanswered++;
clearInterval(intervalID);
time=30;
setTimeout(next1, 4000);

};
};

countdown2 = function () {
time --
console.log(time);
console.log("wins"+wins);
	console.log("losses"+losses);
	console.log("unanswered"+unanswered);
$("#theCountdown2").html(time);

if (time === 0) {
document.getElementById("question2").style.display = "none";
document.getElementById("question2outoftime").style.display = "initial";
unanswered++
clearInterval(intervalID);
time=30;
setTimeout(next2, 4000);


};

};

countdown3 = function () {
time --
console.log(time);
console.log("wins"+wins);
	console.log("losses"+losses);
	console.log("unanswered"+unanswered);
$("#theCountdown3").html(time);

if (time === 0) {
document.getElementById("question3").style.display = "none";
document.getElementById("question3outoftime").style.display = "initial";
unanswered++
clearInterval(intervalID);
time=30;
setTimeout(next3, 4000);


};

};


countdown4 = function () {
time --
console.log(time);
console.log("wins"+wins);
	console.log("losses"+losses);
	console.log("unanswered"+unanswered);
$("#theCountdown4").html(time);

if (time === 0) {
document.getElementById("question4").style.display = "none";
document.getElementById("question4outoftime").style.display = "initial";
unanswered++
clearInterval(intervalID);
time=30;
setTimeout(next4, 4000);


};

};


countdown5 = function () {
time --
console.log(time);
console.log("wins"+wins);
	console.log("losses"+losses);
	console.log("unanswered"+unanswered);
$("#theCountdown5").html(time);

if (time === 0) {
document.getElementById("question5").style.display = "none";
document.getElementById("question5outoftime").style.display = "initial";
unanswered++
clearInterval(intervalID);
time=30;
setTimeout(next5, 4000);

};
};


countdown6 = function () {
time --
console.log(time);
console.log("wins"+wins);
	console.log("losses"+losses);
	console.log("unanswered"+unanswered);
$("#theCountdown6").html(time);

if (time === 0) {
document.getElementById("question6").style.display = "none";
document.getElementById("question6outoftime").style.display = "initial";
unanswered++
clearInterval(intervalID);
time=30;
setTimeout(next6, 4000);

};
};

countdown7 = function () {
time --
console.log(time);
console.log("wins"+wins);
	console.log("losses"+losses);
	console.log("unanswered"+unanswered);
$("#theCountdown7").html(time);

if (time === 0) {
document.getElementById("question7").style.display = "none";
document.getElementById("question7outoftime").style.display = "initial";
unanswered++
clearInterval(intervalID);
time=30;
setTimeout(next7, 4000);

};
};


countdown8 = function () {
time --
console.log(time);
console.log("wins"+wins);
	console.log("losses"+losses);
	console.log("unanswered"+unanswered);
$("#theCountdown8").html(time);

if (time === 0) {
document.getElementById("question8").style.display = "none";
document.getElementById("question8outoftime").style.display = "initial";
unanswered++
clearInterval(intervalID);
time=30;
setTimeout(next8, 4000);

};
};

countdown9 = function () {
time --
console.log(time);
console.log("wins"+wins);
	console.log("losses"+losses);
	console.log("unanswered"+unanswered);
$("#theCountdown9").html(time);

if (time === 0) {
document.getElementById("question9").style.display = "none";
document.getElementById("question9outoftime").style.display = "initial";
unanswered++
clearInterval(intervalID);
time=30;
setTimeout(next9, 4000);

};
};

countdown10 = function () {
time --
console.log(time);
console.log("wins"+wins);
	console.log("losses"+losses);
	console.log("unanswered"+unanswered);
$("#theCountdown10").html(time);

if (time === 0) {
document.getElementById("question10").style.display = "none";
document.getElementById("question10outoftime").style.display = "initial";
unanswered++
clearInterval(intervalID);
time=30;
setTimeout(next10, 4000);

};
};

restart = function() {

document.getElementById("question1").style.display = "initial";
document.getElementById("endScreen").style.display = "none";
intervalID = setInterval(countdown1, 1000);


};


next1 = function() {

document.getElementById("question1correct").style.display = "none";
document.getElementById("question1incorrect").style.display = "none";
document.getElementById("question1outoftime").style.display = "none";
document.getElementById("question2").style.display = "initial";
intervalID = setInterval(countdown2, 1000);


};

next2 = function() {

document.getElementById("question2correct").style.display = "none";
document.getElementById("question2incorrect").style.display = "none";
document.getElementById("question2outoftime").style.display = "none";
document.getElementById("question3").style.display = "initial";
intervalID = setInterval(countdown3, 1000);


};


next3 = function() {

document.getElementById("question3correct").style.display = "none";
document.getElementById("question3incorrect").style.display = "none";
document.getElementById("question3outoftime").style.display = "none";
document.getElementById("question4").style.display = "initial";
intervalID = setInterval(countdown4, 1000);


};

next4 = function() {

document.getElementById("question4correct").style.display = "none";
document.getElementById("question4incorrect").style.display = "none";
document.getElementById("question4outoftime").style.display = "none";
document.getElementById("question5").style.display = "initial";
intervalID = setInterval(countdown5, 1000);


};

next5 = function() {

document.getElementById("question5correct").style.display = "none";
document.getElementById("question5incorrect").style.display = "none";
document.getElementById("question5outoftime").style.display = "none";
document.getElementById("question6").style.display = "initial";
intervalID = setInterval(countdown6, 1000);


};

next6 = function() {

document.getElementById("question6correct").style.display = "none";
document.getElementById("question6incorrect").style.display = "none";
document.getElementById("question6outoftime").style.display = "none";
document.getElementById("question7").style.display = "initial";
intervalID = setInterval(countdown7, 1000);


};


next7 = function() {

document.getElementById("question7correct").style.display = "none";
document.getElementById("question7incorrect").style.display = "none";
document.getElementById("question7outoftime").style.display = "none";
document.getElementById("question8").style.display = "initial";
intervalID = setInterval(countdown8, 1000);


};

next8 = function() {

document.getElementById("question8correct").style.display = "none";
document.getElementById("question8incorrect").style.display = "none";
document.getElementById("question8outoftime").style.display = "none";
document.getElementById("question9").style.display = "initial";
intervalID = setInterval(countdown9, 1000);


};

next9 = function() {

document.getElementById("question9correct").style.display = "none";
document.getElementById("question9incorrect").style.display = "none";
document.getElementById("question9outoftime").style.display = "none";
document.getElementById("question10").style.display = "initial";
intervalID = setInterval(countdown10, 1000);


};


next10 = function() {

document.getElementById("question10correct").style.display = "none";
document.getElementById("question10incorrect").style.display = "none";
document.getElementById("question10outoftime").style.display = "none";
document.getElementById("endScreen").style.display = "initial";
var winsDiv = $("<div>");
var lossesDiv = $("<div>");
var unansweredDiv = $("<div>");
winsDiv.html(wins)
$("#correct").html(winsDiv);
lossesDiv.html(losses);
$("#incorrect").html(lossesDiv);
unansweredDiv.html(unanswered);
$("#unanswered").html(unansweredDiv);



};


$("#startButton").on("click", function() {

	document.getElementById("startScreen").style.display = "none";
	document.getElementById("question1").style.display = "initial";
	intervalID = setInterval(countdown1, 1000);


});


$("#turtles").on("click", function () {

	document.getElementById("question1").style.display = "none";
	document.getElementById("question1correct").style.display = "initial";
	clearInterval(intervalID);
	wins ++;
	time = 30;
	setTimeout(next1, 4000);

});

$("#chickens").on("click", function () {

	document.getElementById("question1").style.display = "none";
	document.getElementById("question1incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next1, 4000);

});

$("#goldfish").on("click", function () {

	document.getElementById("question1").style.display = "none";
	document.getElementById("question1incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next1, 4000);

});

$("#tarantulas").on("click", function () {

	document.getElementById("question1").style.display = "none";
	document.getElementById("question1incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next1, 4000);

});

$("#uranus").on("click", function () {

	document.getElementById("question2").style.display = "none";
	document.getElementById("question2correct").style.display = "initial";
	clearInterval(intervalID);
	wins ++;
	time = 30;
	setTimeout(next2, 4000);

});

$("#neptune").on("click", function () {

	document.getElementById("question2").style.display = "none";
	document.getElementById("question2incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next2, 4000);

});

$("#saturn").on("click", function () {

	document.getElementById("question2").style.display = "none";
	document.getElementById("question2incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next2, 4000);

});

$("#pluto").on("click", function () {

	document.getElementById("question2").style.display = "none";
	document.getElementById("question2incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next2, 4000);


});

$("#mushroom").on("click", function () {

	document.getElementById("question3").style.display = "none";
	document.getElementById("question3correct").style.display = "initial";
	clearInterval(intervalID);
	wins ++;
	time = 30;
	setTimeout(next3, 4000);

});

$("#spices").on("click", function () {

	document.getElementById("question3").style.display = "none";
	document.getElementById("question3incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next3, 4000);

});

$("#poultry").on("click", function () {

	document.getElementById("question3").style.display = "none";
	document.getElementById("question3incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next3, 4000);

});

$("#potato").on("click", function () {

	document.getElementById("question3").style.display = "none";
	document.getElementById("question3incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next3, 4000);


});

$("#phoenix").on("click", function () {

	document.getElementById("question4").style.display = "none";
	document.getElementById("question4correct").style.display = "initial";
	clearInterval(intervalID);
	wins ++;
	time = 30;
	setTimeout(next4, 4000);

});

$("#sanantonio").on("click", function () {

	document.getElementById("question4").style.display = "none";
	document.getElementById("question4incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next4, 4000);

});

$("#seattle").on("click", function () {

	document.getElementById("question4").style.display = "none";
	document.getElementById("question4incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next4, 4000);

});

$("#atlanta").on("click", function () {

	document.getElementById("question4").style.display = "none";
	document.getElementById("question4incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next4, 4000);


});


$("#murder").on("click", function () {

	document.getElementById("question5").style.display = "none";
	document.getElementById("question5correct").style.display = "initial";
	clearInterval(intervalID);
	wins ++;
	time = 30;
	setTimeout(next5, 4000);

});

$("#flock").on("click", function () {

	document.getElementById("question5").style.display = "none";
	document.getElementById("question5incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next5, 4000);

});

$("#pod").on("click", function () {

	document.getElementById("question5").style.display = "none";
	document.getElementById("question5incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next5, 4000);

});

$("#coven").on("click", function () {

	document.getElementById("question5").style.display = "none";
	document.getElementById("question5incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next5, 4000);


});



$("#missorangecounty").on("click", function () {

	document.getElementById("question6").style.display = "none";
	document.getElementById("question6correct").style.display = "initial";
	clearInterval(intervalID);
	wins ++;
	time = 30;
	setTimeout(next6, 4000);

});

$("#misssonomacounty").on("click", function () {

	document.getElementById("question6").style.display = "none";
	document.getElementById("question6incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next6, 4000);

});

$("#misscalifornia").on("click", function () {

	document.getElementById("question6").style.display = "none";
	document.getElementById("question6incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next6, 4000);

});

$("#missanaheim").on("click", function () {

	document.getElementById("question6").style.display = "none";
	document.getElementById("question6incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next6, 4000);


});

$("#roomtemp").on("click", function () {

	document.getElementById("question7").style.display = "none";
	document.getElementById("question7correct").style.display = "initial";
	clearInterval(intervalID);
	wins ++;
	time = 30;
	setTimeout(next7, 4000);

});

$("#decanter").on("click", function () {

	document.getElementById("question7").style.display = "none";
	document.getElementById("question7incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next7, 4000);

});

$("#inside").on("click", function () {

	document.getElementById("question7").style.display = "none";
	document.getElementById("question7incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next7, 4000);

});

$("#chilled").on("click", function () {

	document.getElementById("question7").style.display = "none";
	document.getElementById("question7incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next7, 4000);


});


$("#beijing").on("click", function () {

	document.getElementById("question8").style.display = "none";
	document.getElementById("question8correct").style.display = "initial";
	clearInterval(intervalID);
	wins ++;
	time = 30;
	setTimeout(next8, 4000);

});

$("#torino").on("click", function () {

	document.getElementById("question8").style.display = "none";
	document.getElementById("question8incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next8, 4000);

});

$("#london").on("click", function () {

	document.getElementById("question8").style.display = "none";
	document.getElementById("question8incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next8, 4000);

});

$("#tokyo").on("click", function () {

	document.getElementById("question8").style.display = "none";
	document.getElementById("question8incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next8, 4000);


});



$("#solange").on("click", function () {

	document.getElementById("question9").style.display = "none";
	document.getElementById("question9correct").style.display = "initial";
	clearInterval(intervalID);
	wins ++;
	time = 30;
	setTimeout(next9, 4000);

});

$("#giselle").on("click", function () {

	document.getElementById("question9").style.display = "none";
	document.getElementById("question9incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next9, 4000);

});

$("#shania").on("click", function () {

	document.getElementById("question9").style.display = "none";
	document.getElementById("question9incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next9, 4000);

});

$("#solana").on("click", function () {

	document.getElementById("question9").style.display = "none";
	document.getElementById("question9incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next9, 4000);


});



$("#bamboo").on("click", function () {

	document.getElementById("question10").style.display = "none";
	document.getElementById("question10correct").style.display = "initial";
	clearInterval(intervalID);
	wins ++;
	time = 30;
	setTimeout(next10, 4000);

});

$("#rice").on("click", function () {

	document.getElementById("question10").style.display = "none";
	document.getElementById("question10incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next10, 4000);

});

$("#jade").on("click", function () {

	document.getElementById("question10").style.display = "none";
	document.getElementById("question10incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next10, 4000);

});

$("#pandas").on("click", function () {

	document.getElementById("question10").style.display = "none";
	document.getElementById("question10incorrect").style.display = "initial";
	clearInterval(intervalID);
	losses ++;
	time = 30;
	setTimeout(next10, 4000);



});

$("#restartButton").on("click", function (){

wins= 0
losses= 0
unanswered= 0

restart();
});





