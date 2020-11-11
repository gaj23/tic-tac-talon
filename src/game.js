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
    if (this.startingPlayer === this.player1) {
      this.startingPlayer = this.player2;
    } else {
      this.startingPlayer = this.player1;
    };
    this.currentPlayer;
    this.win = false;
    this.playCount = 0;
    this.squareIDs = [{
      id: 'one',
      selectedBy: null
    }, {
      id: 'two',
      selectedBy: null
    }, {
      id: 'three',
      selectedBy: null
    }, {
      id: 'four',
      selectedBy: null
    }, {
      id: 'five',
      selectedBy: null
    }, {
      id: 'six',
      selectedBy: null
    }, {
      id: 'seven',
      selectedBy: null
    }, {
      id: 'eight',
      selectedBy: null
    }, {
      id: 'nine',
      selectedBy: null
    }];
  }

  assignStartingPlayer() {
    var stringedCount = localStorage.getItem('playCount');
    var currentCount = JSON.parse(stringedCount);
    this.playCount = currentCount;
    if (this.playCount % 2 === 0) {
      this.startingPlayer = this.player1;
    } else {
      this.startingPlayer = this.player2;
    }
  }

  determineTurn() {
    if (this.currentPlayer === this.player2) {
      this.currentPlayer = this.player1;
    } else {
      this.currentPlayer = this.player2;
    }
  }

  updateSquareIDs(squareID, tokenID) {
    for (var i = 0; i < this.squareIDs.length; i++) {
      if (this.squareIDs[i].id === squareID) {
        this.squareIDs[i].selectedBy = tokenID;
      }
    }
  }

  updatePlayerScore() {
    this.player1.retrieveWinsFromStorage();
    this.player2.retrieveWinsFromStorage();
    if (this.currentPlayer === this.player1) {
      this.player1.score += 1;
      this.updateStoredScore();
    } else {
      this.player2.score += 1;
      this.updateStoredScore();
    }
  }

  updateStoredScore() {
    this.player1.saveWinsToStorage();
    this.player2.saveWinsToStorage();
  }

  increasePlayCount() {
    var stringedCount = localStorage.getItem('playCount');
    var currentCount = JSON.parse(stringedCount);
    this.playCount = currentCount + 1;
    this.updateStoredPlayCount();
  }

  updateStoredPlayCount() {
    var playCount = JSON.stringify(this.playCount);
    localStorage.setItem('playCount', playCount);
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