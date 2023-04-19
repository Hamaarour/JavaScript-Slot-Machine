//-1 - depose some money
//-2 - determine number of lines to bet on
//-3 - collect a bet amount
// 4 - spin the slote machine
// 5 - check if the player won
// 6 - give the player the money
// 7 -play again

const prompt = require("prompt-sync")();


const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
	"A": 2,
	"B": 4,
	"C": 6,
	"D": 8,
}
const SYMBOLS_VaLUE = {
	"A": 5,
	"B": 4,
	"C": 3,
	"D": 2,
};


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
const getBet = (balance, lines) => {
	const bet = prompt("Enter the bet lines ");
	const betAmount = parseFloat(bet);
	if (betAmount <= 0 || isNaN(betAmount) || betAmount > balance / lines) {
		console.log("Invalid ! enter a valid Bet. ");
		getBet(balance);
	}
	else{
		return (betAmount);
	}
};
const spin = () => {
	const symbols = [];
	for (const[symbol, count] of Object.entries(SYMBOLS_COUNT)) {
		for (let i = 0; i < count; i++) {
			symbols.push(symbol);
		}
	}
	const reels = [[], [], []];
	for (let i = 0; i < COLS; i++) {
		// copy the symbols array so we can remove symbols from it without affecting the original array
		const reelSymbols = [...symbols];
		for (let j = 0; j < ROWS; j++) {
			// get a random index from the reelSymbols array
			const randomIndex = Math.floor(Math.random() * reelSymbols.length);
			const selecedSymbol = reelSymbols[randomIndex];
			reels[i].push(selecedSymbol);
			// remove the symbol from the reelSymbols array so it can't be selected again
			reelSymbols.splice(randomIndex, 1);

		}
	}
	return reels;
};


spin();

let balnce = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balnce, numberOfLines);
