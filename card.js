class Card{
    constructor() {
        this._word;
        this.front;
        this.back;
    }
 
    constructCard( wordArray ) {
        var counter = 1;
 
        for (var rowI = 0; rowI < 5; rowI++) {
            var newRow = $('<div>').addClass('cardset row');
 
            for (var cardI = 0; cardI < 5; cardI++) {
                var newCard = $('<div>').addClass('card');
                var newCardFront = $('<div>').addClass('cardfront');
                var newCardBack = $('<div>').addClass('cardback');
                var newCardP = $('<p>').addClass('word');
 
                newCardBack.attr('num', counter++);
                newCardBack.attr('xpos', cardI);
                newCardBack.attr('ypos', rowI);
 
                var randomWord = wordArray[0];
                wordArray.splice(0, 1);
 
                newCardP.text(randomWord);
                newCardBack.attr('word', randomWord);
 
                newCardFront.append(newCardP);
                newCard.append(newCardFront, newCardBack);
                newRow.append(newCard);
            }
            $('.gamearea .cards').append(newRow);
        }
 
    }
 
    copyArray(wordArray) {
        wordArray = wordArray.concat(wordArray);
        var wordArray2 = wordArray.splice(25,25);
        return wordArray2;
    }
 
    randomizer(wordArray) {
        for (var i = wordArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = wordArray[i];
            wordArray[i] = wordArray[j];
            wordArray[j] = temp;
        }
    }
}