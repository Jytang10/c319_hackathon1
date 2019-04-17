class Card{
    constructor() {
        this._word;
        this.front;
        this.back;
        this.wordArray = [
            'pug',
            'brachycephalic',
            'grumble',
            'fawn',
            'potato'
        ]
    }

    constructCard() {
        var newRow = $('<div>').addClass('cardset row'); 

        for (var cardI = 0; cardI < 5; cardI++) {
            var newCard = $('<div>').addClass('card');
            var newCardFront = $('<div>').addClass('cardfront');
            var newCardBack = $('<div>').addClass('cardback');
            var newCardP = $('<p>').addClass('word');

            var randomWordIndex = Math.floor(Math.random() * this.wordArray.length);
            var randomWord = this.wordArray[randomWordIndex];
            this.wordArray.splice(randomWordIndex, 1);

            newCardP.text(randomWord);

            newCardFront.append(newCardP);
            newCard.append(newCardFront, newCardBack);
            newRow.append(newCard);
        }
        $('.gamearea').append(newRow);
    }
}