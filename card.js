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
        debugger
        var counter = 1;
        var newArray = [];

        for (var rowI = 0; rowI < 5; rowI++) {
            var newRow = $('<div>').addClass('cardset row');
        
            var newP1Array = [];
            var newP2Array = [];

            for (var cardI = 0; cardI < 5; cardI++) {
                var newCard = $('<div>').addClass('card');
                var newCardFront = $('<div>').addClass('cardfront');
                var newCardBack = $('<div>').addClass('cardback');
                var newCardP = $('<p>').addClass('word');

                newCardBack.addClass('num' + counter); 

                var randomWordIndex = Math.floor(Math.random() * this.wordArray.length);
                var randomWord = this.wordArray[randomWordIndex];
                this.wordArray.splice(randomWordIndex, 1);

                newP1Array[i].position = 'num' + counter;
                newP1Array[i].p1State = 'innocent';
                newP2Array[i].position = 'num' + counter++;
                newP2Array[i].p2State = 'innocent';

                newCardP.text(randomWord);

                newCardFront.append(newCardP);
                newCard.append(newCardFront, newCardBack);
                newRow.append(newCard);
            }
            $('.gamearea .cards').append(newRow);
            newArray.push(newP1Array);
            newArray.push(newP2Array);
        }
        console.log(newArray)
    }
}