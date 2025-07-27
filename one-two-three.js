 /*
const score = {
  wins: 0,
  loses: 0,
  ties: 0,
};
*/
//reload local storage using JSON.getItem => convert from JSON string to an object using JSON.parse()
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses: 0,
  ties: 0,
}; //default score values - shorthand

updateScoreElement();

/* default score values
if (!score) {
  score = {
    wins: 0,
    loses: 0,
    ties: 0,
  };
}
  */

function playGame(playerMove) {
  // start of pick computer move
  const randomNumber = Math.random();
  console.log(randomNumber);

  const computerMove =
    randomNumber >= 0 && randomNumber < 1 / 3
      ? "rock"
      : randomNumber >= 1 / 3 && randomNumber < 2 / 3
      ? "paper"
      : randomNumber >= 2 / 3 && randomNumber < 1
      ? "scissors"
      : "";
  console.log(computerMove);
  // end of pick computer move

  let result = "";
  if (playerMove === "rock") {
    result =
      computerMove === "rock"
        ? "Tie."
        : computerMove === "paper"
        ? "You lose."
        : "You win.";
  } else if (playerMove === "paper") {
    result =
      computerMove === "rock"
        ? "You win."
        : computerMove === "paper"
        ? "Tie."
        : "You lose.";
  } else if (playerMove === "scissors") {
    result =
      computerMove === "rock"
        ? "You lose."
        : computerMove === "paper"
        ? "You win."
        : "Tie.";
  }
  console.log(result);

  // update a socre
  result === "You win."
    ? (score.wins += 1)
    : result === "You lose."
    ? (score.loses += 1)
    : result === "Tie."
    ? (score.ties += 1)
    : "";

  // saving in local storage - only supports strings => convert to string using JSON.stringify()
  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();
  // p with class js-result
  document.querySelector(".js-result").innerHTML = `${result}`;
  // p with class js-move
  document.querySelector(".js-move").innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon" />
<img src="images/${computerMove}-emoji.png" class="move-icon" />
Computer`;

  return result; //stops the execution and returns a value
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}