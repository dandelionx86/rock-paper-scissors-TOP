document.addEventListener("DOMContentLoaded", function () {
  let round = 0;
  let userScore = 0;
  let computerScore = 0;

  function rounds() {
    round++;
    document.querySelector("#round").innerHTML = round;
  }

  function getComputerScore() {
    computerScore++;
    document.querySelector("#computerScore").innerHTML = computerScore;
    if (computerScore === 5) {
      computerScore = 5;
      confirm("Computer Score: 5 Points! Computer Wins the Game!");
      location.reload();
    }
  }

  function getUserScore() {
    userScore++;
    document.querySelector("#userScore").innerHTML = userScore;
    if (userScore === 5) {
      userScore = 5;
      confirm("User Score: 5 Points! You Win the Game!");
      location.reload();
    }
  }

  function getRoundWinner(user, computer) {
    let computerWins = false;
    let userWins = false;

    if (user === "Rock" && computer === "Paper") {
      document.querySelector("#winner").innerHTML =
        "Paper covers rock. Computer wins round.";
      computerWins = true;
    } else if (user === "Paper" && computer === "Rock") {
      document.querySelector("#winner").innerHTML =
        "Paper covers rock. You win this round!";
      userWins = true;
    } else if (user === "Paper" && computer === "Scissors") {
      document.querySelector("#winner").innerHTML =
        "Scissors cut paper. Computer wins round.";
      computerWins = true;
    } else if (user === "Scissors" && computer === "Paper") {
      document.querySelector("#winner").innerHTML =
        "Scissors cut paper. You win this round!";
      userWins = true;
    } else if (user === "Scissors" && computer === "Rock") {
      document.querySelector("#winner").innerHTML =
        "Rocks crush scissors. Computer wins round.";
      console.log("Rocks crush scissors. Computer wins round.");
      computerWins = true;
    } else if (user === "Rock" && computer === "Scissors") {
      document.querySelector("#winner").innerHTML =
        "Rock crushes scissors. You win this round!";
      userWins = true;
    } else {
      document.querySelector("#winner").innerHTML = "Tie!";
    }

    if (userWins === true) {
      getUserScore();
    } else if (computerWins === true) {
      getComputerScore();
    }
  }

  document.querySelectorAll(".userMove").forEach(function (button) {
    button.onclick = function () {
      let userMove = button.dataset.move;
      let moves = ["Rock", "Paper", "Scissors"];
      let computerMove = moves[Math.floor(Math.random() * moves.length)];

      console.log(userMove, computerMove);

      getRoundWinner(userMove, computerMove);
      rounds();
    };
  });
});
