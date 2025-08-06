const startBtn = document.getElementById("start-game");
const resetBtn = document.getElementById("reset-game");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const gameBtns = document.querySelectorAll(".game");

let userScoreValue = 0;
let computerScoreValue = 0;
let gameStarted = false;

startBtn.addEventListener("click", () => {
  gameStarted = !gameStarted;
  startBtn.textContent = gameStarted ? "⏸ Pause Game" : "▶ Start Game";
  gameBtns.forEach((btn) => (btn.disabled = !gameStarted));
});

resetBtn.addEventListener("click", () => {
  userScoreValue = 0;
  computerScoreValue = 0;
  userScore.value = 0;
  computerScore.value = 0;
  gameStarted = false;
  startBtn.textContent = "▶ Start Game";
  gameBtns.forEach((btn) => (btn.disabled = true));
});

gameBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!gameStarted) return;

    const userChoice = btn.id; // now correctly gets "bat", "ball", or "stumps"
    const choices = ["bat", "ball", "stumps"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let winner = "";

    if (userChoice === computerChoice) {
      winner = "draw";
      alert(`Draw! You both chose ${userChoice}`);
    } else if (
      (userChoice === "bat" && computerChoice === "ball") ||
      (userChoice === "ball" && computerChoice === "stumps") ||
      (userChoice === "stumps" && computerChoice === "bat")
    ) {
      winner = "user";
      userScoreValue++;
      alert(`You win! ${userChoice} beats ${computerChoice}`);
    } else {
      winner = "computer";
      computerScoreValue++;
      alert(`Computer wins! ${computerChoice} beats ${userChoice}`);
    }

    userScore.value = userScoreValue;
    computerScore.value = computerScoreValue;
  });
});
