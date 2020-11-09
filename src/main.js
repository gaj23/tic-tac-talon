var game = new Game();

var gameboard = document.querySelector('.gameboard');
var restartButton = document.querySelector('button');
var header = document.querySelector('#player-turn');

gameboard.addEventListener('click', manageGamePlay);
restartButton.addEventListener('click', restartGame);

function manageGamePlay(event) {
  var square = event.target;
  manageSquares(square);
  checkWinStatus();
  if (game.win === true) {
    header.innerText = `🥇 ${game.currentPlayer.header} Wins! 🥇`;
    gameboard.classList.add('disabled');
    game.clearBoard();
  } else {
    game.determineTurn();
    header.innerText = `${game.currentPlayer.header}'s Turn!`
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
  // checkTie();
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

// function checkTie() {
//   debugger
//   var all = document.querySelectorAll('.square')
//   if (all.classList.contains(`${game.player1.id}`) || all.classList.contains(`${game.player2.id}`)) {
//     header.innerHTML = "It's a Tie!"
//   }
// }

function restartGame() {
  alert('Wow! You pushed the button!');
  localStorage.clear();
  var eagleScore = document.querySelector('.eagle-score');
  var turkeyScore = document.querySelector('.turkey-score');
  eagleScore.innerText = '0';
  turkeyScore.innerText = '0';
}