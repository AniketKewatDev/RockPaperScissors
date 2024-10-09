const choices = document.querySelectorAll(".choice");

let userScore = 0;
let compScore = 0;

// function - To get computer choice using math.random.
function getCompChoice() {
  let options = ["rock", "paper", "scissors"];
  let randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

// Game draw function
const drawGame = () => {
  document.getElementById("msg").innerHTML = "its draw";
};

const playGame = (userChoice) => {
  const compChoice = getCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else if (
    (userChoice === "rock" && compChoice === "paper") ||
    (userChoice === "paper" && compChoice === "scissors") ||
    (userChoice === "scissors" && compChoice === "rock")
  ) {
    document.getElementById("msg").innerHTML = "You Lose";
    compScore++;
    document.getElementById("compScore").innerHTML = compScore;
  } else {
    document.getElementById("msg").innerHTML = "You Win";
    userScore++;
    document.getElementById("userScore").innerHTML = userScore;
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});