var game = new Game();

var gameboard = document.querySelector('.gameboard');
var restartButton = document.querySelector('button');
var header = document.querySelector('#player-turn');

gameboard.addEventListener('click', manageGamePlay);
restartButton.addEventListener('click', restartGame);

function manageGamePlay(event) {
  var square = event.target;
  manageSquares(square);
}

function manageSquares(square) {
  console.log('current player', game.currentPlayer)
  for (var i = 0; i < game.squareIDs.length; i++) {
    if (square.id === game.squareIDs[i]) {
      toggleToken(square);
      game.determineTurn();
      square.classList.add('disabled');
      console.log('current player', game.currentPlayer)
    }
  }
}

function toggleToken(square) {
  header.innerText = `${game.currentPlayer.header}'s Turn!`
  square.innerHTML = `<img src="${game.currentPlayer.imageSrc}" alt="${game.currentPlayer.alt}" class="board-image" id="${game.currentPlayer.id}">`;
}


function restartGame() {
  alert('Wow! You pushed the button!');
  localStorage.clear();
  var eagleScore = document.querySelector('.eagle-score');
  var turkeyScore = document.querySelector('.turkey-score');
  eagleScore.innerText = '0';
  turkeyScore.innerText = '0';
}