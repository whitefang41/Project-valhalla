let winners = [];
const choices = ["axe", "shield", "sword"];



function startGame() {
  let imgs = document.querySelectorAll("img");
  imgs.forEach((img) =>
    img.addEventListener('click', () => {
      if (img.id) {
        playRound(img.id);
      }
    })
  );
}

function playRound(playerChoice) {
  let wins = checkWins();
  if (wins >= 5) {
    return;
  }

  const computerChoice = computerSelect();

  const winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
  tallyWins();
  displayRound(computerChoice, winner);
  wins = checkWins();
  if (wins == 5) {
    displayEnd();
  }
}

function displayEnd() {
  let playerWins = winners.filter((item) => item == "warrior").length;

  if (playerWins == 5) {
    document.querySelector(".winner").textContent =
      "You Survived 5 battles, Congrats Warrior!";
  } else {
    document.querySelector(".winner").textContent =
      "You died, the Enemy won the war!";
  }
  
}

function displayRound(computerChoice, winner) {
  document.querySelector(
    ".computerChoice"
  ).textContent = `The Enemy Chose: ${
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
  }`;
  displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
  if (winner == "warrior") {
    document.querySelector(".winner").textContent = "You won the Battle!";
  } else if (winner == "enemy") {
    document.querySelector(".winner").textContent =
      "The Enemy won the Battle";
  } else {
    document.querySelector(".winner").textContent = "The Battle was a tie";
  }
}

function tallyWins() {
  const pWinCount = winners.filter((item) => item == "warrior").length;
  const cWinCount = winners.filter((item) => item == "enemy").length;
  const ties = winners.filter((item) => item == "Tie").length;
  document.querySelector(".playerScore").textContent = `${pWinCount}`;
  document.querySelector(".computerScore").textContent = `${cWinCount}`;
  document.querySelector(".ties").textContent = `${ties}`;
}

function computerSelect() {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function checkWins() {
  const pWinCount = winners.filter((item) => item == "warrior").length;
  const cWinCount = winners.filter((item) => item == "enemy").length;
  return Math.max(pWinCount, cWinCount);
}

function checkWinner(choice1, choice2) {
  if (
    (choice1 == "axe" && choice2 == "sword") ||
    (choice1 == "sword" && choice2 == "shield") ||
    (choice1 == "shield" && choice2 == "axe")
  ) {
    return "warrior";
  } else if (choice1 == choice2) {
    return "Tie";
  } else {
    return "enemy";
  }
}

function setWins() {
  const pWinCount = winners.filter((item) => item == "warrior").length;
  const cWinCount = winners.filter((item) => item == "enemy").length;
  const ties = winners.filter((item) => item == "Tie").length;
}
startGame();