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
}

function manageSquares(square) {
  for (var i = 0; i < game.squareIDs.length; i++) {
    if (square.id === game.squareIDs[i]) {
      toggleToken(square);
      game.determineTurn();
      header.innerText = `${game.currentPlayer.header}'s Turn!`
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
  checkHorizontal();
  checkVertical();
  checkDiagonal();
}

function checkHorizontal() {
  var sq1 = document.getElementById('one');
  var sq2 = document.getElementById('two');
  var sq3 = document.getElementById('three');
  var sq4 = document.getElementById('four')
  var sq5 = document.getElementById('five')
  var sq6 = document.getElementById('six')
  var sq7 = document.getElementById('seven')
  var sq7 = document.getElementById('eight')
  var sq9 = document.getElementById('nine')
  if (sq1.classList.contains(`${game.currentPlayer.id}`) && sq2.classList.contains(`${game.currentPlayer.id}`) && sq3.classList.contains(`${game.currentPlayer.id}`)) {
    console.log('please');
    // gameboard.classList.add('disabled');
    // header.innerText = 'Turkey Wins!'
    //why is it coming up undefined?
  } else if (sq4.classList.contains(`${game.currentPlayer.id}`) && sq5.classList.contains(`${game.currentPlayer.id}`) && sq6.classList.contains(`${game.currentPlayer.id}`)) {
    console.log('please')
  } else if (sq7.classList.contains(`${game.currentPlayer.id}`) && sq8.classList.contains(`${game.currentPlayer.id}`) && sq9.classList.contains(`${game.currentPlayer.id}`)) {
    console.log('please')
  }
  //currentPlayer is lagging
  //why can't I put the getElementById in the checkWinStatus?
}

function checkVertical() {
  var sq1 = document.getElementById('one');
  var sq2 = document.getElementById('two');
  var sq3 = document.getElementById('three');
  var sq4 = document.getElementById('four')
  var sq5 = document.getElementById('five')
  var sq6 = document.getElementById('six')
  var sq7 = document.getElementById('seven')
  var sq7 = document.getElementById('eight')
  var sq9 = document.getElementById('nine')
  if (sq1.classList.contains(`${game.currentPlayer.id}`) && sq4.classList.contains(`${game.currentPlayer.id}`) && sq7.classList.contains(`${game.currentPlayer.id}`)) {
    console.log('please');
  } else if (sq2.classList.contains(`${game.currentPlayer.id}`) && sq5.classList.contains(`${game.currentPlayer.id}`) && sq8.classList.contains(`${game.currentPlayer.id}`)) {
    console.log('please')
  } else if (sq3.classList.contains(`${game.currentPlayer.id}`) && sq6.classList.contains(`${game.currentPlayer.id}`) && sq9.classList.contains(`${game.currentPlayer.id}`)) {
    console.log('please')
  }
}

function checkDiagonal() {
  var sq1 = document.getElementById('one');
  var sq2 = document.getElementById('two');
  var sq3 = document.getElementById('three');
  var sq4 = document.getElementById('four')
  var sq5 = document.getElementById('five')
  var sq6 = document.getElementById('six')
  var sq7 = document.getElementById('seven')
  var sq7 = document.getElementById('eight')
  var sq9 = document.getElementById('nine')
  if (sq1.classList.contains(`${game.currentPlayer.id}`) && sq5.classList.contains(`${game.currentPlayer.id}`) && sq9.classList.contains(`${game.currentPlayer.id}`)) {
    console.log('please');
    // gameboard.classList.add('disabled');
    // header.innerText = 'Turkey Wins!'
    //why is it coming up undefined?
  } else if (sq3.classList.contains(`${game.currentPlayer.id}`) && sq5.classList.contains(`${game.currentPlayer.id}`) && sq7.classList.contains(`${game.currentPlayer.id}`)) {
    console.log('please')
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