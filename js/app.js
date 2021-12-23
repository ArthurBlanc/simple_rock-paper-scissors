const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");
const newGameBtn = document.getElementById("new-game");

const roundNumber = document.getElementById("round-number");
const winNumber = document.getElementById("win-number");
const drawNumber = document.getElementById("draw-number");
const loseNumber = document.getElementById("lose-number");
const rockNumber = document.getElementById("rock-number");
const scissorsNumber = document.getElementById("scissors-number");
const paperNumber = document.getElementById("paper-number");

const roundEl = document.getElementById("round");
const versus = document.getElementById("versus");
const result = document.getElementById("result");

// 0 = Rock ; 1 = Scissors ; 2 = Paper

rockBtn.addEventListener("click", (event) => {
	chifoumi(0);
});

scissorsBtn.addEventListener("click", (event) => {
	chifoumi(1);
});

paperBtn.addEventListener("click", (event) => {
	chifoumi(2);
});

newGameBtn.addEventListener("click", (event) => {
	launchNewGame();
});

var win = 0;
var draw = 0;
var lose = 0;
var round = 1;
var rock = 0;
var scissors = 0;
var paper = 0;

const launchNewGame = () => {
	win = 0;
	draw = 0;
	lose = 0;
	round = 1;
	rock = 0;
	scissors = 0;
	paper = 0;

	roundEl.innerHTML = "Round #" + round;
	versus.innerHTML = "";
	result.innerHTML = "";

	winNumber.innerHTML = win;
	drawNumber.innerHTML = draw;
	loseNumber.innerHTML = lose;
	rockNumber.innerHTML = rock;
	scissorsNumber.innerHTML = scissors;
	paperNumber.innerHTML = paper;
};

const getRandomInt = (max) => {
	return Math.floor(Math.random() * max);
};

const percentage = (partialValue, totalValue) => {
	return ((100 * partialValue) / totalValue).toFixed(2);
};

const chifoumi = (playerChoice) => {
	const computerChoice = getRandomInt(3);
	round++;
	roundEl.innerHTML = "Round #" + round;

	if (playerChoice === 0) {
		var playerChoiceName = "<i class='far fa-hand-rock'></i> Pierre";
		rock++;
		rockNumber.innerHTML = rock;
	} else if (playerChoice === 1) {
		var playerChoiceName = "<i class='far fa-hand-scissors'></i> Ciseaux";
		scissors++;
		scissorsNumber.innerHTML = scissors;
	} else if (playerChoice === 2) {
		var playerChoiceName = "<i class='far fa-hand-paper'></i> Feuille";
		paper++;
		paperNumber.innerHTML = paper;
	}

	if (computerChoice === 0) {
		var computerChoiceName = "<i class='far fa-hand-rock'></i> Pierre";
	} else if (computerChoice === 1) {
		var computerChoiceName = "<i class='far fa-hand-scissors'></i> Ciseaux";
	} else if (computerChoice === 2) {
		var computerChoiceName = "<i class='far fa-hand-paper'></i> Feuille";
	}

	if (playerChoice !== undefined && computerChoice !== undefined) {
		versus.innerHTML = "<span class='text-success'>" + playerChoiceName + " (joueur)</span> VS <span class='text-danger'>" + computerChoiceName + " (ordinateur)</span>";
	}

	if (playerChoice + 1 === computerChoice || playerChoice - 2 === computerChoice) {
		win++;
		result.innerHTML =
			"<div class='alert alert-success' role='alert'><span class='text-success'>" +
			playerChoiceName +
			" (joueur)</span> gagne contre <span class='text-danger'>" +
			computerChoiceName +
			" (ordinateur)</span> - <span class='text-success'>Vous avez gagné</span></div>";
	} else if (playerChoice === computerChoice) {
		draw++;
		result.innerHTML = "<div class='alert alert-warning' role='alert'><span class='text-warning'>Egalité</span></div>";
	} else if (playerChoice - 1 === computerChoice || playerChoice + 2 === computerChoice) {
		lose++;
		result.innerHTML =
			"<div class='alert alert-danger' role='alert'> <span class='text-danger'>" +
			computerChoiceName +
			" (ordinateur)</span>  gagne contre <span class='text-success'>" +
			playerChoiceName +
			" (joueur)</span> - <span class='text-danger'>Vous avez perdu</span></div>";
	}
	winNumber.innerHTML = win + " (" + percentage(win, round) + "%)";
	drawNumber.innerHTML = draw + " (" + percentage(draw, round) + "%)";
	loseNumber.innerHTML = lose + " (" + percentage(lose, round) + "%)";
};
