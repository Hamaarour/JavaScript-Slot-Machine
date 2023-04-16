// 1 - depose some money
// 2 - determine number of lines to bet on
// 3 - collect a bet amount
// 4 - spin the slote machine
// 5 - check if the player won
// 6 - give the player the money
// 7 -play again

const prompt = require("prompt-sync")();




const deposit = () => {
	const Amount = prompt("How much money would you like to deposit? ");
	const depositAmount = parseFloat(Amount);
	if (depositAmount <= 0 || isNaN(depositAmount)) {
		console.log("Please enter a valid amount");
		deposit();
	}
	else{
		return (depositAmount);
	}
};
const getNumberOfLines = () =>{
	const lines = prompt("How many lines would you like to bet on? ");
	const numberOfLines = parseInt(lines);
	if (numberOfLines <= 0 || isNaN(numberOfLines) || numberOfLines < 3) {
		console.log("Invalid ! enter a valid number : ");
		getNumberOfLines();
	}
	else{
		return (numberOfLines);
	}
};
const getBet = (balance) => {
	const bet = prompt("How much would you like to bet? ");
	const betAmount = parseFloat(bet);
	if (betAmount <= 0 || isNaN(betAmount) || betAmount > balance) {
		console.log("Invalid ! enter a valid Bet : ");
		getBet(balance);
	}
	else{
		return (betAmount);
	}
};
let balnce = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balnce);

