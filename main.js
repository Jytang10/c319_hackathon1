
$(document).ready(initializeApp);

var newGame;
var getName;

function initializeApp() {
    $('.coverbtn').click(closeLandingPage);
    $('.player1').click(getKeyCards);
    $('.player2').click(getKeyCards);
    $('.retrybtn').click(function() {
        window.location.reload();
    })
    function closeLandingPage() {
        getName = this.className.split(" ");
        name = getName[1];
        newGame = new Codenames(name);
        clickHandler();
        $('.cover').hide();
    }
    $('.submitbtn').click(function(){
        newGame.giveNewClue($('#clue > input[name=yourClue]').val(),$('#number > input[name=yourNumber]').val());
    });
}

function getKeyCards() {
    if (this.className === "coverbtn player1") {
      $('.keycardset2').css('display', 'none');
      $('.playericon2').css('background-image', 'url("images/agent2.png")');
      $('.playerturn1').text('You are P1'); 
    } else {
      $('.keycardset1').css('display', 'none');
      $('.playericon1').css('background-image', 'url("images/agent2.png")');
      $('.playerturn2').text('You are P2'); 
    }
  }

function clickHandler() {
    $('.cards').on('click', '.cardback', newGame.cardClicked);
}