let check = confirm('Do you want to play a game?');
let randNum;
let guessNum;
let lowerNum = 1;
let upperNum = 8;
const one = 1;
let tries = 3;
let triesInit = 3;
let prize = 100;
let totalPrize = 0;
let conformation;

if(check === false){
	alert('You did not become a billionaire, but can.');
}else{	
do{
	let wins = 0;
	tries = 3;
	totalPrize = 0;
	upperNum = 8;
	prize = 100;
	randNum = Math.floor(Math.random() * (upperNum - lowerNum + one) ) + lowerNum;
	for(let i = 0; i < triesInit; ++i){

		
		guessNum = +prompt('Choose a roulette pocket number from 0 to ' + upperNum
			+'\nAttempts left: ' + tries+ '\nTotal prize: ' + totalPrize
			+ '\nPossible prize on current attempt: '+ prize);
		if (guessNum === randNum) {
			totalPrize += prize;
			conformation = confirm('Congratulation, you won! Your prize is:' + prize
				+'. Do you want to continue?');
			if(conformation){
				prize = 100;
				wins++;
				upperNum += 4;
				prize = prize*Math.pow(2,wins);
				tries = 3;
				i= -1;
			}else{
				alert('Thank you for your participation. Your prize is:' + totalPrize +'$');
			}
		}else{
			prize = prize/2;
			tries--;
		}
	}
conformation = confirm('Thank you for your participation. Your prize is:' + totalPrize
	+'$' + ' Do you want to continue?');

	}while(conformation);
}