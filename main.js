
$(document).ready(initializeApp);

var newGame;
var newGameCodenames
var generateBoard;
var player1;
var player2;
var name;

function initializeApp() {
    $('.coverbtn').click(closeLandingPage);
    function closeLandingPage() {
        name = $('.nameinput').val();
        newGame = new Codenames(new Player(name));
        clickHandler();
        $('.cover').hide();
    }
    $('.submitbtn').click(function(){
        console.log('saving');
        newGame.giveNewClue($('#clue > input[name=yourClue]').val(),$('#number > input[name=yourNumber]').val());
    
        if(newGame.data.currentPlayer) {
            newGame.data.currentPlayer = 0;
            // $('#clue').show();
            // $('#number').show();
        } else {
            newGame.data.currentPlayer = 1;
            // $('#clue').hide();
            // $('#number').hide();
        }
    });
    
    
    

}

function clickHandler() {
    $('.cards').on('click', '.cardback', newGame.cardClicked);
}
    function sendClueMessage(){
        $('.submitbtn').click(function(){
            console.log('saving');
            newGame.updateDB({
                clue:$('#clue > input[name=yourClue]').val(),
                number:$('#number > input[name=yourNumber]').val()
            });
        });
    }






// getInputVal() {
//     this.clue = $('.clueinput').val();
//     this.number = $('.numberinput').val();
//     console.log('this.clue', this.clue);
//     console.log('this.number', this.number);
// }




class Player {
    constructor(name) {
        // this.counts = 9; //left turns
        // this.playerKeycard = [];
        // // var newKeycards = new Keycards();
        // // this.playerKeycard.push(newKeycards.getKeycards());
        // this.clue;
        // this.number;
        this.name = name;
    }
    getInputVal() {
        this.clue = $('.clueinput').val();
        this.number = $('.numberinput').val();
        console.log('this.clue', this.clue);
        console.log('this.number', this.number);
    }
    getName(){
        return this.name;
    }

}
