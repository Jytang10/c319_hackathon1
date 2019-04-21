class Codenames{
    constructor(firstPlayer) {
        this.newPlayer = firstPlayer;
        this.handleFirebaseUpdate = this.handleFirebaseUpdate.bind( this );
        this.handleInitialGameState = this.handleInitialGameState.bind( this );
        this.firebaseLoaded = this.firebaseLoaded.bind(this);
        this.firebase = new CodenamesFBObject('CodenamesDuet', this.handleFirebaseUpdate, this.firebaseLoaded);
        this.wordArray = [
            'pug',
            'vet',
            'grumble',
            'fawn',
            'potato',
            'rat',
            'cake',
            'scroll',
            'sled',
            'bench',
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
        this.data = null;
        this.cardClicked = this.cardClicked.bind(this);
        this.giveNewClue = this.giveNewClue.bind(this);
    }
    firebaseLoaded(){
        this.firebase.getAllData( this.handleInitialGameState );
    }
    handleInitialGameState( data ){
        var newGameCard = new Card();
       if (data && data.players) {
           this.data = data;
           this.data.players.push(this.newPlayer);
           newGameCard.constructCard(this.data.words);
       } else {
           this.data = {
               players : [this.newPlayer],
               words: null,
               gameBoard: [
                [{p1State:'innocent',p2State: 'innocent', status : 'transparent'},
                {p1State:'innocent',p2State: 'agent', status : 'transparent'},
                {p1State:'agent',p2State: 'innocent', status : 'transparent'},
                {p1State:'agent',p2State: 'agent', status : 'transparent'},
                {p1State:'assassin',p2State: 'assassin', status : 'transparent'}],
                
                [{p1State:'assassin',p2State: 'agent', status : 'transparent'},
                {p1State:'agent',p2State: 'assassin', status : 'transparent'},
                {p1State:'innocent',p2State: 'agent', status : 'transparent'},
                {p1State:'agent',p2State: 'innocent', status : 'transparent'},
                {p1State:'innocent',p2State: 'agent', status : 'transparent'}],
                
                [{p1State:'agent',p2State: 'innocent', status : 'transparent'},
                {p1State:'agent',p2State: 'innocent', status : 'transparent'},
                {p1State:'agent',p2State: 'innocent', status : 'transparent'},
                {p1State:'innocent',p2State: 'innocent', status : 'transparent'},
                {p1State:'agent',p2State: 'innocent', status : 'transparent'}],
                
                [{p1State:'innocent',p2State: 'innocent', status : 'transparent'},
                {p1State:'innocent',p2State: 'agent', status : 'transparent'},
                {p1State:'innocent',p2State: 'innocent', status : 'transparent'},
                {p1State:'assassin',p2State: 'agent', status : 'transparent'},
                {p1State:'agent',p2State: 'agent', status : 'transparent'}],
                
                [{p1State:'innocent',p2State: 'innocent', status : 'transparent'},
                {p1State:'innocent',p2State: 'innocent', status : 'transparent'},
                {p1State:'innocent',p2State: 'assassin', status : 'transparent'},
                {p1State:'innocent',p2State: 'innocent', status : 'transparent'},
                {p1State:'innocent',p2State: 'agent', status : 'transparent'}]
              ], 
               playerStats: {
                   p1: {
                       agentsRemaining: 8
                   },
                   p2: {
                       agentsRemaining: 8
                   }
               },
               clue: null,
               number: null,
               turnCount: 9
           }
           newGameCard.randomizer(this.wordArray);
           this.data.words = newGameCard.copyArray(this.wordArray);
           newGameCard.constructCard(this.wordArray);
       }
       this.firebase.saveState(this.data);
   }

    getData() {
        return this.data;
    }
    
    handleFirebaseUpdate( data ){     //checks firebase data and make local changes
        console.log('this data is ', data);
        //do something with the data
        $("#clueDisplay").text(data.clue);
        $("#numberDisplay").text(data.number);
        $('.token').text(data.turnCount);
        this.updateDB(data);
    }

    updateDB(data){                //send updated data to firebase DB
        this.firebase.saveState(data);
    }

    giveNewClue( word, number){
        this.data.clue = word;
        this.data.number = number;
        this.data.turnCount-=1;
        if(this.data.turnCount < 0){
            $('.modal').show();
        }
        this.updateDB(this.data);
    }
    
    cardClicked(event) {
        var clickedCardNum = event.currentTarget.attributes[1].value;
        var clickedCardX = event.currentTarget.attributes[2].value;
        var clickedCardY = event.currentTarget.attributes[3].value;
        var clickedCardClass = $(`[num~=${clickedCardNum}]`);
        var fetchData = this.data;
        var gBoard = fetchData.gameBoard;
        var playerTag = $('.playerturn1').text();
        var splitTag = playerTag.split(" ");
        var player = splitTag[2];
        if(player == 'P1') {
            if (gBoard[clickedCardY][clickedCardX].p1State === 'innocent') {
                clickedCardClass.css({'background-color': 'yellow'});
                gBoard[clickedCardY][clickedCardX].status === 'yellow';
            } else if (gBoard[clickedCardY][clickedCardX].p1State === 'assassin') {
                clickedCardClass.css({'background-image': 'url("images/assassinDan.png")'});
                clickedCardClass.css({'opacity': 1});
                gBoard[clickedCardY][clickedCardX].status === 'black';
                $('.modal').show();
            } else if (gBoard[clickedCardY][clickedCardX].p1State === 'agent') {
                clickedCardClass.css({'background-image': 'url("images/back.jpg")'});
                clickedCardClass.css({'opacity': 1});
                gBoard[clickedCardY][clickedCardX].status === 'green';
            }
    } else {
            if (gBoard[clickedCardY][clickedCardX].p2State === 'innocent') {
                clickedCardClass.css({'background-color': 'yellow'});
                gBoard[clickedCardY][clickedCardX].status === 'yellow';
            } else if (gBoard[clickedCardY][clickedCardX].p2State === 'assassin') {
                clickedCardClass.css({'background-image': 'url("images/assassinDan.png")'});
                clickedCardClass.css({'opacity': 1});
                gBoard[clickedCardY][clickedCardX].status === 'black';
                $('.modal').show();
            } else if (gBoard[clickedCardY][clickedCardX].p2State === 'agent') {
                clickedCardClass.css({'background-image': 'url("images/back.jpg")'});
                clickedCardClass.css({'opacity': 1});
                gBoard[clickedCardY][clickedCardX].status === 'green';
            }
    }
       this.updateDB(this.data);
    }
}