var game = new Game();

var gameboard = document.querySelector('.gameboard');
var restartButton = document.querySelector('button');
var header = document.querySelector('#player-turn');

gameboard.addEventListener('click', manageGamePlay);
restartButton.addEventListener('click', restartGame);
window.addEventListener('load', updateScoreBoard);

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
  square.innerHTML = `<img src="${game.currentPlayer.imageSrc}" alt="${game.currentPlayer.alt}" class="board-image" id="${game.currentPlayer.id}">`;
  var tokenID = game.currentPlayer.id;
  square.classList.add(tokenID);
  square.classList.add('disabled');
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
    gameboard.removeEventListener('click', manageGamePlay);
    game.updatePlayerScore();
    // game.increasePlayCount();
    updateScoreBoard();
    header.innerText = `🥇 ${game.currentPlayer.header} Wins! 🥇`;
    clearBoard();
  } else if (game.win === null) {
    gameboard.removeEventListener('click', manageGamePlay);
    // game.increasePlayCount();
    header.innerText = `😓 It's a Tie! 😓`;
    clearBoard();
  } else {
    game.determineTurn();
    header.innerText = `${game.currentPlayer.header}'s Turn!`
  }
}

function updateScoreBoard() {
  var eagleScore = document.querySelector('.eagle-score');
  var turkeyScore = document.querySelector('.turkey-score');
  // if (game.playCount === 0) {
  //   turkeyScore.innerHTML = "0";
  //   eagleScore.innerHTML = "0";
  // } else {
  var updateTurkey = JSON.parse(localStorage.getItem('turkeyScore'));
  turkeyScore.innerHTML = updateTurkey;
  var updateEagle = JSON.parse(localStorage.getItem('eagleScore'));
  eagleScore.innerHTML = updateEagle;
  // }
}
//should I separate out scoreBoard count and controlling the innerHTML if 0?

function clearBoard() {
  setTimeout(function() {
    window.location.reload();
  }, 3000);
}

function restartGame() {
  alert('Wow! You pushed the button!');
  localStorage.clear();
  setTimeout(function() {
    window.location.reload();
  }, 300);
}