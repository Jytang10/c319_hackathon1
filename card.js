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
            'potato',
            'rat',
            'cake',
            'puggle',
            'pugrrito',
            'pugasaurus',
            'biscuit',
            'desk',
            'saddle',
            'bucket',
            'beam',
            'coach',
            'frost',
            'curry',
            'parade',
            'london',
            'rock',
            'floor', 
            'snake',
            'break',
            'battle'
        ]
    }

    constructCard() {
        // return;
        var counter = 1;

        for (var rowI = 0; rowI < 5; rowI++) {
            var newRow = $('<div>').addClass('cardset row'); 

            for (var cardI = 0; cardI < 5; cardI++) {
                var newCard = $('<div>').addClass('card');
                var newCardFront = $('<div>').addClass('cardfront');
                var newCardBack = $('<div>').addClass('cardback');
                var newCardP = $('<p>').addClass('word');

                newCardBack.addClass('num' + counter++);

                var randomWordIndex = Math.floor(Math.random() * this.wordArray.length);
                var randomWord = this.wordArray[randomWordIndex];
                this.wordArray.splice(randomWordIndex, 1);

                newCardP.text(randomWord);

                newCardFront.append(newCardP);
                newCard.append(newCardFront, newCardBack);
                newRow.append(newCard);
            }
            $('.gamearea .cards').append(newRow);
        }
        
    }

    card
}