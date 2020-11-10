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
    this.squareIDs = [{
      id: "one",
      selectedBy: null
    }, {
      id: "two",
      selectedBy: null
    }, {
      id: "three",
      selectedBy: null
    }, {
      id: "four",
      selectedBy: null
    }, {
      id: "five",
      selectedBy: null
    }, {
      id: "six",
      selectedBy: null
    }, {
      id: "seven",
      selectedBy: null
    }, {
      id: "eight",
      selectedBy: null
    }, {
      id: "nine",
      selectedBy: null
    }]
    this.currentPlayer = this.player1;
    this.win = false;
    this.playCount = 0;
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
  // updateStoredPlayCount() {
  //   var playCount = JSON.stringify(this.playCount);
  //   localStorage.setItem('playCount', playCount);
  // }
  //
  // increasePlayCount() {
  //   var updateCount = JSON.parse(localStorage.getItem('playCount'));
  //   this.playCount = updateCount;
  //   this.playCount += 1;
  //   this.updateStoredPlayCount();
  // }

  updateSquareIDs(squareID, tokenID) {
    for (var i = 0; i < this.squareIDs.length; i++) {
      if (this.squareIDs[i].id === squareID) {
        this.squareIDs[i].selectedBy = tokenID;
      }
    }
  }
  checkHorizontal() {
    if (this.squareIDs[0].selectedBy === this.currentPlayer.id && this.squareIDs[1].selectedBy === this.currentPlayer.id && this.squareIDs[2].selectedBy === this.currentPlayer.id) {
      this.win = true;
    } else if (this.squareIDs[3].selectedBy === this.currentPlayer.id && this.squareIDs[4].selectedBy === this.currentPlayer.id && this.squareIDs[5].selectedBy === this.currentPlayer.id) {
      this.win = true;
    } else if (this.squareIDs[6].selectedBy === this.currentPlayer.id && this.squareIDs[7].selectedBy === this.currentPlayer.id && this.squareIDs[8].selectedBy === this.currentPlayer.id) {
      this.win = true;
    }
  }
  checkVertical() {
    if (this.squareIDs[0].selectedBy === this.currentPlayer.id && this.squareIDs[3].selectedBy === this.currentPlayer.id && this.squareIDs[6].selectedBy === this.currentPlayer.id) {
      this.win = true;
    } else if (this.squareIDs[1].selectedBy === this.currentPlayer.id && this.squareIDs[4].selectedBy === this.currentPlayer.id && this.squareIDs[7].selectedBy === this.currentPlayer.id) {
      this.win = true;
    } else if (this.squareIDs[2].selectedBy === this.currentPlayer.id && this.squareIDs[5].selectedBy === this.currentPlayer.id && this.squareIDs[8].selectedBy === this.currentPlayer.id) {
      this.win = true;
    }
  }
  checkDiagonal() {
    if (this.squareIDs[0].selectedBy === this.currentPlayer.id && this.squareIDs[4].selectedBy === this.currentPlayer.id && this.squareIDs[8].selectedBy === this.currentPlayer.id) {
      this.win = true;
    } else if (this.squareIDs[2].selectedBy === this.currentPlayer.id && this.squareIDs[4].selectedBy === this.currentPlayer.id && this.squareIDs[6].selectedBy === this.currentPlayer.id) {
      this.win = true;
    }
  }
  checkTie() {
    var squareCount = 0;
    for (var i = 0; i < this.squareIDs.length; i++) {
      if (this.squareIDs[i].selectedBy !== null) {
        squareCount += 1;
      }
      if (squareCount === 9) this.win = null;
    }
  }
}