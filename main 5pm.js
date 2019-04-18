
$(document).ready(initializeApp);

var newGame;
var generateBoard;
var player1;
var player2;

function initializeApp() {
    $('.cover').hide();
    player1 = new Player(1);
    player2 = new Player(2);
     //add click handler to landing page 'start' button
    newGame = new Codenames();
    generateBoard = new Card();
    generateBoard.constructCard();
    $('.submitbtn').click(player1.getInputVal);
}

class Player {
    constructor( num ) {
        this.currentPlayer = num; //player[currentPlayer]
        this.counts = 9; //left turns
        this.playerKeycard = [];
        var newKeycards = new Keycards();
        this.playerKeycard.push(newKeycards.getKeycards());
        this.clue;
        this.number;
        newGame.addNewPlayer(player1);
        newGame.addNewPlayer(player2);
    }
    getInputVal() {
        this.clue = $('.clueinput').val();
        this.number = $('.numberinput').val();
        console.log('this.clue', this.clue);
        console.log('this.number', this.number);
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

// player1 = new Player(1);
// player2 = new Player(2);
console.log('player1', player1);
console.log('player2', player2);
