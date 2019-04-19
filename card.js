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
        this.wordArray2 =[];
    }

    constructCard() {
        var counter = 1;
        var indexCounter = 0;

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

                // var randomWordIndex = Math.floor(Math.random() * this.wordArray.length);
                // var randomWord = this.wordArray[randomWordIndex];
                // this.wordArray.splice(randomWordIndex, 1);

                var randomWord = this.wordArray[indexCounter++]

                newCardP.text(randomWord);
                newCardBack.attr('word', randomWord);

                newCardFront.append(newCardP);
                newCard.append(newCardFront, newCardBack);
                newRow.append(newCard);
            }
            $('.gamearea .cards').append(newRow);
        }
        
    }
<<<<<<< HEAD
=======

    copyArray() {
        this.wordArray2 = this.wordArray.slice();
    }

    randomizer() {
        this.wordArray
    }
>>>>>>> 3a66d5249b68e5880873ca134b70fe4c54901553
}