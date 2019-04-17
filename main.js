
$(document).ready(initializeApp);

function initializeApp() {
    newGame = new Codenames();
}


class Player {
    constructor( num ) {
        this.currentPlayer = num; //player[currentPlayer]
        this.counts = 9; //left turns
        this.playerKeycard = [];
        var newKeycards = new Keycards();
        this.playerKeycard.push(newKeycards.getKeycards());
    }
}

class Keycards {
    constructor( ) { 
        this.keycard = [
            ["green", "yellow", "green", "yellow", "black"],
            ["black", "green", "green", "yellow", "yellow"],
            ["green", "green", "black", "yellow", "yellow"]
        ]
    }
    getKeycards() {
        this.randomNum = Math.floor(Math.random() * this.keycard.length);
        return this.keycard[this.randomNum];
    }
}

var player1 = new Player(1);
var player2 = new Player(2);
console.log('player1', player1);
console.log('player2', player2);

