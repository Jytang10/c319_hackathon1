
$(document).ready(initializeApp);

var newGame;
var generateBoard;
<<<<<<< HEAD

function initializeApp() {
    $('.cover').hide();
    newGame = new Codenames(new Player());
    generateBoard = new Card();
    generateBoard.constructCard();
     //add click handler to landing page 'start' button
    $('.submitbtn').click(newGame._player.getInputVal);
    $('.cardback').click(generateBoard.cardclicked);
=======
var player1;
var player2;
var name;

function initializeApp() {
    $('.cover').hide();

    newGame = new Codenames(new Player('kate'));
    generateBoard = new Card();
    generateBoard.constructCard();
     //add click handler to landing page 'start' button
    // $('.submitbtn').click(newGame._player.getInputVal);
    // newGame.addNewPlayer(player1);
    // newGame.addNewPlayer(player2);
    name = prompt("What's your name?");

>>>>>>> origin/firebaseData
}

// getInputVal() {
//     this.clue = $('.clueinput').val();
//     this.number = $('.numberinput').val();
//     console.log('this.clue', this.clue);
//     console.log('this.number', this.number);
// }




class Player {
    constructor(name) {
        this.counts = 9; //left turns
        this.playerKeycard = [];
        // var newKeycards = new Keycards();
        // this.playerKeycard.push(newKeycards.getKeycards());
        this.clue;
        this.number;
        this.name = name;
    }
    getInputVal() {
        this.clue = $('.clueinput').val();
        this.number = $('.numberinput').val();
        console.log('this.clue', this.clue);
        console.log('this.number', this.number);
    }
<<<<<<< HEAD
=======
    getName(){
        return this.name;
    }

>>>>>>> origin/firebaseData
}


// class Keycards {
//     constructor( ) { 
//         this.keycard = [
//             ["green", "yellow", "green", "yellow", "black"],
//             ["black", "green", "green", "yellow", "yellow"],
//             ["green", "green", "black", "yellow", "yellow"]
//         ]
//     }
//     getKeycards() {
//         this.randomNum = Math.floor(Math.random() * this.keycard.length);
//         return this.keycard[this.randomNum];
//     }
// }

// player1 = new Player(1);
// player2 = new Player(2);
// // player1 = new Player(1);
// // player2 = new Player(2);
// console.log('player1', player1);
// console.log('player2', player2);

