
$(document).ready(initializeApp);

var newGame;
var generateBoard;
var player1;
var player2;
var name;

function initializeApp() {
    $('.coverbtn').click(closeLandingPage);
    function closeLandingPage() {
        name = $('.nameinput').val();
        newGame = new Codenames(new Player(name));
        generateBoard = new Card();
        generateBoard.constructCard();
        $('.cover').hide();
    }

    $('.submitbtn').click(function(){
        console.log('saving');
        newGame.giveNewClue($('#clue > input[name=yourClue]').val(),$('#number > input[name=yourNumber]').val());
    

        if(newGame.data.currentPlayer) {
            newGame.data.currentPlayer = 0;
            $('#clue').show();
            $('#number').show();
        } else {
            newGame.data.currentPlayer = 1;
            $('#clue').hide();
            $('#number').hide();
        }
    });
}

class Player {
    constructor(name) {
        this.name = name;
    }
    // getInputVal() {
    //     this.clue = $('.clueinput').val();
    //     this.number = $('.numberinput').val();
    //     console.log('this.clue', this.clue);
    //     console.log('this.number', this.number);
    // }
    getName(){
        return this.name;
    }

}