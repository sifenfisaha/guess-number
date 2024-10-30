"use strict";

let secretNumber, score, highScore;
initializeGame();

function initializeGame() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  highScore = highScore || 0;
  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = highScore;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".container").style.backgroundColor = "";
  document.querySelector(".win-container").classList.add("hidden");
  document.querySelector(".home").classList.remove("hidden");
}

document.querySelector(".play-again").addEventListener("click", initializeGame);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ Enter a number!";
  } else if (guess < 1 || guess > 20) {
    document.querySelector(".message").textContent =
      "🚫 Number must be between 1 and 20!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct! You win!";
    document.querySelector(".win-container").classList.remove("hidden");
    document.querySelector(".home").classList.add("hidden");
    document.querySelector(".win-score").textContent = score;
    document.querySelector(".container").style.backgroundColor = "#60b347";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
      document.querySelector(".win-highscore").textContent = highScore;
    }
  } else {
    document.querySelector(".message").textContent =
      guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
    score--;
    document.querySelector(".score").textContent = score;

    if (score < 1) {
      document.querySelector(".message").textContent =
        "😓 You lost! Try again.";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".container").style.backgroundColor = "#d9534f";
    }
  }
});
