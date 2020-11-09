var game = new Game();

var gameboard = document.querySelector('.gameboard');
var restartButton = document.querySelector('button');
var header = document.querySelector('#player-turn');
//can I move this somewhere else to exist in a fx?, is it being used in only functions nested within each other?
var eagleScore = document.querySelector('.eagle-score');
var turkeyScore = document.querySelector('.turkey-score');

gameboard.addEventListener('click', manageGamePlay);
restartButton.addEventListener('click', restartGame);

function manageGamePlay(event) {
  var square = event.target;
  if (square.classList.contains('disabled')) {
    event.stopImmediatePropagation();
    alert('This space is taken! Try somewhere else.')
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
  square.innerHTML = `<img src="${game.currentPlayer.imageSrc}" alt="${game.currentPlayer.alt}" class="board-image disabled" id="${game.currentPlayer.id}">`;
  var tokenID = game.currentPlayer.id;
  square.classList.add(tokenID);
  square.classList.add('disabled');
}

//below is fairly bulky, but code works.
function checkWinStatus() {
  var sq1 = document.getElementById('one');
  var sq2 = document.getElementById('two');
  var sq3 = document.getElementById('three');
  var sq4 = document.getElementById('four')
  var sq5 = document.getElementById('five')
  var sq6 = document.getElementById('six')
  var sq7 = document.getElementById('seven')
  var sq8 = document.getElementById('eight')
  var sq9 = document.getElementById('nine')
  checkHorizontal(sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9);
  checkVertical(sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9);
  checkDiagonal(sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9);
  if (this.win = false) {
    checkTie(sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9);
  }
}

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

function assessGameStatus() {
  if (game.win === true) {
    game.updatePlayerScore();
    updateScoreBoard();
    header.innerText = `🥇 ${game.currentPlayer.header} Wins! 🥇`;
    game.clearBoard();
  } else if (game.win === null) {
    header.innerText = `😓 It's a Tie! 😓`;
    game.clearBoard();
  } else {
    game.determineTurn();
    header.innerText = `${game.currentPlayer.header}'s Turn!`
  }
}

function updateScoreBoard() {
  if (game.currentPlayer.id === game.player1.id) {
    turkeyScore.innerHTML = `${game.player1.wins}`
    //use what's in local storage, not
  } else if (game.currentPlayer.id === game.player2.id) {
    eagleScore.innerHTML = `${game.player2.wins}`;
  }
}
//needs to persist upon refresh

function restartGame() {
  alert('Wow! You pushed the button!');
  localStorage.clear();
  eagleScore.innerText = '0';
  turkeyScore.innerText = '0';
}