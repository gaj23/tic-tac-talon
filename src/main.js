var game = new Game();

var gameboard = document.querySelector('.gameboard');
var restartButton = document.querySelector('button');
var header = document.querySelector('#player-turn');

window.addEventListener('load', updatePage);
gameboard.addEventListener('click', manageGamePlay);
restartButton.addEventListener('click', restartGame);


function updatePage() {
  game.assignStartingPlayer();
  manageStartingPlayer();
  updateScoreBoard();
}

function manageStartingPlayer() {
  if (game.startingPlayer === game.player1) {
    header.innerText = 'Turkey Starts!'
    game.currentPlayer = game.player1;
  } else {
    header.innerText = 'Eagle Starts!'
    game.currentPlayer = game.player2;
  }
}

function updateScoreBoard() {
  var eagleScore = document.querySelector('.eagle-score');
  var turkeyScore = document.querySelector('.turkey-score');
  var updateTurkey = JSON.parse(localStorage.getItem('turkeyScore'));
  turkeyScore.innerHTML = updateTurkey;
  var updateEagle = JSON.parse(localStorage.getItem('eagleScore'));
  eagleScore.innerHTML = updateEagle;
}

function manageGamePlay(event) {
  var square = event.target;
  if (square.classList.contains('board-image')) {
    event.stopImmediatePropagation();
  } else {
    manageSquares(square);
    checkWinStatus();
    assessGameStatus();
  }
}

function manageSquares(square) {
  for (var i = 0; i < game.squareIDs.length; i++) {
    if (square.id === game.squareIDs[i].id) {
      toggleToken(square);
    }
  }
}

function toggleToken(square) {
  square.innerHTML = `<img src="${game.currentPlayer.imageSrc}" alt="${game.currentPlayer.alt}" class="board-image disabled" id="${game.currentPlayer.id}">`;
  var tokenID = game.currentPlayer.id;
  square.classList.add(tokenID);
  game.updateSquareIDs(square.id, tokenID);
}

function checkWinStatus() {
  game.checkHorizontal();
  game.checkVertical();
  game.checkDiagonal();
  if (game.win === false) {
    game.checkTie();
  }
}

function assessGameStatus() {
  if (game.win === true) {
    runWinScenario();
  } else if (game.win === null) {
    runTieScenario();
  } else {
    game.determineTurn();
    header.innerText = `${game.currentPlayer.header}'s Turn!`
  }
}

function runWinScenario() {
  gameboard.removeEventListener('click', manageGamePlay);
  game.increasePlayCount();
  game.updatePlayerScore();
  updateScoreBoard();
  header.innerText = `🥇 ${game.currentPlayer.header} Wins! 🥇`;
  clearBoard();
}

function runTieScenario() {
  gameboard.removeEventListener('click', manageGamePlay);
  game.increasePlayCount();
  header.innerText = `😓 It's a Tie! 😓`;
  clearBoard();
}

function clearBoard() {
  setTimeout(function() {
    window.location.reload();
  }, 3000);
}

function restartGame() {
  alert('Wow! You pushed the button! The score will now clear.')
  localStorage.clear();
  setTimeout(function() {
    window.location.reload();
  }, 300);
}