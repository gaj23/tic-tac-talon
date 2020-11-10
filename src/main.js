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
    if (square.id === game.squareIDs[i]) {
      toggleToken(square);
    }
  }
}

function toggleToken(square) {
  square.innerHTML = `<img src="${game.currentPlayer.imageSrc}" alt="${game.currentPlayer.alt}" class="board-image" id="${game.currentPlayer.id}">`;
  var tokenID = game.currentPlayer.id;
  square.classList.add(tokenID);
  square.classList.add('disabled');
}

//below is fairly bulky, but code works.
function checkWinStatus() {
  var sq1 = document.getElementById('one');
  var sq2 = document.getElementById('two');
  var sq3 = document.getElementById('three');
  var sq4 = document.getElementById('four');
  var sq5 = document.getElementById('five');
  var sq6 = document.getElementById('six');
  var sq7 = document.getElementById('seven');
  var sq8 = document.getElementById('eight');
  var sq9 = document.getElementById('nine');
  checkHorizontal(sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9);
  checkVertical(sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9);
  checkDiagonal(sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9);
  if (game.win === false) {
    checkTie(sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9);
  }
}
//array, pushing used squares
//array of each sqares classList?
//qSA

function checkHorizontal(sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9) {
  if (sq1.classList.contains(`${game.currentPlayer.id}`) && sq2.classList.contains(`${game.currentPlayer.id}`) && sq3.classList.contains(`${game.currentPlayer.id}`)) {
    game.win = true;
  } else if (sq4.classList.contains(`${game.currentPlayer.id}`) && sq5.classList.contains(`${game.currentPlayer.id}`) && sq6.classList.contains(`${game.currentPlayer.id}`)) {
    game.win = true;
  } else if (sq7.classList.contains(`${game.currentPlayer.id}`) && sq8.classList.contains(`${game.currentPlayer.id}`) && sq9.classList.contains(`${game.currentPlayer.id}`)) {
    game.win = true;
  }
}

function checkVertical(sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9) {
  if (sq1.classList.contains(`${game.currentPlayer.id}`) && sq4.classList.contains(`${game.currentPlayer.id}`) && sq7.classList.contains(`${game.currentPlayer.id}`)) {
    game.win = true;
  } else if (sq2.classList.contains(`${game.currentPlayer.id}`) && sq5.classList.contains(`${game.currentPlayer.id}`) && sq8.classList.contains(`${game.currentPlayer.id}`)) {
    game.win = true;
  } else if (sq3.classList.contains(`${game.currentPlayer.id}`) && sq6.classList.contains(`${game.currentPlayer.id}`) && sq9.classList.contains(`${game.currentPlayer.id}`)) {
    game.win = true;
  }
}

function checkDiagonal(sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9) {
  if (sq1.classList.contains(`${game.currentPlayer.id}`) && sq5.classList.contains(`${game.currentPlayer.id}`) && sq9.classList.contains(`${game.currentPlayer.id}`)) {
    game.win = true;
  } else if (sq3.classList.contains(`${game.currentPlayer.id}`) && sq5.classList.contains(`${game.currentPlayer.id}`) && sq7.classList.contains(`${game.currentPlayer.id}`)) {
    game.win = true;
  }
}

function checkTie(sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9) {
  if (sq1.classList.contains('disabled') && sq2.classList.contains('disabled') && sq3.classList.contains('disabled') && sq4.classList.contains('disabled') && sq5.classList.contains('disabled') && sq6.classList.contains('disabled') && sq7.classList.contains('disabled') && sq8.classList.contains('disabled') && sq9.classList.contains('disabled')) {
    game.win = null;
  }
}
//tried using querySelectorAll, but kept returning undefined on first click? maybe because of placement.
//includes vs contains
//bc array like of qSA
//us a forloop.

function assessGameStatus() {
  if (game.win === true) {
    gameboard.removeEventListener('click', manageGamePlay);
    game.updatePlayerScore();
    updateScoreBoard();
    header.innerText = `🥇 ${game.currentPlayer.header} Wins! 🥇`;
    clearBoard();
  } else if (game.win === null) {
    gameboard.removeEventListener('click', manageGamePlay);
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
  var updateTurkey = JSON.parse(localStorage.getItem('turkeyScore'));
  turkeyScore.innerHTML = updateTurkey;
  var updateEagle = JSON.parse(localStorage.getItem('eagleScore'));
  eagleScore.innerHTML = updateEagle;
}

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