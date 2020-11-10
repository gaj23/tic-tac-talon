class Game {
  constructor() {
    this.player1 = new Player({
      imageSrc: 'assets/turkey.png',
      id: 'turkey',
      alt: 'turkey cartoon',
      header: 'Turkey',
    });
    this.player2 = new Player({
      imageSrc: 'assets/bald-eagle.png',
      id: 'bald-eagle',
      alt: 'bald eagle cartoon',
      header: 'Bald Eagle',
    });
    this.squareIDs = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    this.currentPlayer = this.player1;
    this.win = false;
  }

  updateStoredScore() {
    var turkeyWins = JSON.stringify(this.player1.score);
    localStorage.setItem('turkeyScore', turkeyWins);
    var eagleWins = JSON.stringify(this.player2.score);
    localStorage.setItem('eagleScore', eagleWins);
  }

  updatePlayerScore() {
    if (this.currentPlayer === this.player1) {
      var updateTurkey = JSON.parse(localStorage.getItem('turkeyScore'));
      this.player1.score = updateTurkey;
      this.player1.score += 1;
      var eagle = JSON.parse(localStorage.getItem('eagleScore'));
      this.player2.score = eagle;
      this.updateStoredScore();
    } else {
      var updateEagle = JSON.parse(localStorage.getItem('eagleScore'));
      this.player2.score = updateEagle;
      this.player2.score += 1;
      var turkey = JSON.parse(localStorage.getItem('turkeyScore'));
      this.player1.score = turkey;
      this.updateStoredScore();
    }
  }

  determineTurn() {
    if (this.currentPlayer === this.player2) {
      this.currentPlayer = this.player1;
    } else {
      this.currentPlayer = this.player2;
    }
  }
}