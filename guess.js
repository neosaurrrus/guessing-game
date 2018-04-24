
//Create secret Number
var secretNumber = 4;
//Ask user for Guess
var guess = Number(prompt("Guess a Number"));

//Check guess is right
if (guess === secretNumber){
		alert("You got it right!");
}
else if (guess > secretNumber){
	alert ("too high");
}
else {
	alert("Too low");

}

