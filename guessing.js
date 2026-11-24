const prompt = require('prompt-sync')();

let trials = 5;
let guessedvalue = 50;
while(trials >= 1 ){
	let number = Number(prompt("Guess a number from 1 to 100: "));
	if(number == guessedvalue){
		console.log("Congrats you won!!!")
	}else{
	trials-=1
	console.log("trials left are : " + trials + " olodo u no sabi try again");
	
	}
	
}
