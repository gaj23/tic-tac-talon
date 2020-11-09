class Game {
  constructor() {
    this.player1 = new Player({
      imageSrc: 'assets/turkey.png',
      id: 'turkey',
      alt: 'turkey cartoon',
      header: 'Turkey'
    });
    this.player2 = new Player({
      imageSrc: 'assets/bald-eagle.png',
      id: 'bald-eagle',
      alt: 'bald eagle cartoon',
      header: 'Bald Eagle'
    });
    this.squareIDs = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    this.currentPlayer = this.player1;
    this.win = false;
    this.playCount = 0; //needed?
  }

  updateStoredScore() {
    var turkeyWins = JSON.stringify(this.player1.wins);
    localStorage.setItem('turkeyScore', turkeyWins);
    var eagleWins = JSON.stringify(this.player2.wins);
    localStorage.setItem('eagleScore', eagleWins);
  }

  updatePlayerScore() {
    if (this.currentPlayer === this.player1) {
      var updateTurkey = JSON.parse(localStorage.getItem('turkeyScore'));
      this.player1.wins = updateTurkey;
      this.player1.wins += 1;
      var eagle = JSON.parse(localStorage.getItem('eagleScore'));
      this.player2.wins = eagle;
      this.updateStoredScore();
    } else {
      var updateEagle = JSON.parse(localStorage.getItem('eagleScore'));
      this.player2.wins = updateEagle;
      this.player2.wins += 1;
      var turkey = JSON.parse(localStorage.getItem('turkeyScore'));
      this.player1.wins = turkey;
      this.updateStoredScore();
    }
  }

  //get data from localStorage, reassign that number to player1 & 2 and then increment that "new" number then store that new value back in.

  determineTurn() {
    if (this.currentPlayer === this.player2) {
      this.currentPlayer = this.player1;
    } else {
      this.currentPlayer = this.player2;
    }
  }

  checkBoard() {
    //Why do I need this?
  }

  clearBoard() {
    setTimeout(function() {
      window.location.reload();
    }, 3000);
  }
  //is this technically DOM manipulation?

}