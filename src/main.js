var game = new Game();
// where should this global variable exist? --> inside of my game.js, but still not sure how to pass in my two players as parameters?

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
  for (var i = 0; i < game.squareIDs.length; i++) {
    if (square.id === game.squareIDs[i]) {
      game.determineTurn();
      toggleToken(square);
      square.classList.add('disabled');
    }
  }
}

//Can I refactor using parameters/passing in game.currentPlayer? & interpolating the src, alt, and id?
//yes square.src = game.currentPlayer.imageSrc, ect...
//or no currentPlayer and just use game.player1 or game.player2 properties
function toggleToken(square) {
  if (game.playCount === 0) {
    square.innerHTML = '<img src="assets/bald-eagle.png" alt="bald eagle cartoon" class="board-image" id="player-eagle">';
    header.innerText = "Turkey's Turn";
  } else if (game.playCount === 1) {
    square.innerHTML = '<img src="assets/turkey.png" alt="turkey cartoon" class="board-image" id="player-turkey">';
    header.innerText = "Bald Eagle's turn";
  }
}


function restartGame() {
  alert('Wow! You pushed the button!');
  localStorage.clear();
  var eagleScore = document.querySelector('.eagle-score');
  var turkeyScore = document.querySelector('.turkey-score');
  eagleScore.innerText = '0';
  turkeyScore.innerText = '0';
}