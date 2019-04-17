
$(document).ready(initializeApp);

var newGame;
var generateBoard;

function initializeApp() {
    newGame = new Codenames();
    generateBoard = new Card();
    generateBoard.constructCard();
    
}
