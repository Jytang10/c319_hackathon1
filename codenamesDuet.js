class Codenames{
    constructor(firstPlayer) {
        // this.players = [];
        this.newPlayer = firstPlayer;
        this.displayCards = [];
        this._card;
        this._player = null;
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
            'scroll', //change
            'sled',//change
            'bench',//change
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
        // this.firebase.saveState(this.data)
        this.firebase.getAllData( this.handleInitialGameState );
    }
    handleInitialGameState( data ){
         //initial game state
         var newGameCard = new Card();

        if (data && data.players) {
            debugger
            this.data = data;
            this.data.players.push(this.newPlayer);
            newGameCard.constructCard(this.data.words);
            // var tempPlayer = this.data.players;
            // var playerNames = [];
            // debugger
            // this.playerNames.push(tempPlayer);
            // this.playerNames.push(this.newPlayer);
            // this.data.players = playerNames;
            console.log('player list',this.data.players);
        } else {
            // this.data.players.push(newPlayer);
            debugger;   
            this.data = {
                players : [this.newPlayer],
                words: null,
                gameBoard: [
                    [{position: '1',p1State:'innocent',p2State: 'innocent', status : 'transparent', word : "pug"},
                    {position: '2',p1State:'innocent',p2State: 'agent', status : 'transparent', word : "vet"},
                    {position: '3',p1State:'agent',p2State: 'innocent', status : 'transparent', word : "grumble"},
                    {position: '4',p1State:'agent',p2State: 'agent', status : 'transparent', word : "fawn"},
                    {position: '5',p1State:'assassin',p2State: 'assassin', status : 'transparent', word : "potato"}],
                    
                    [{position: '6',p1State:'assassin',p2State: 'agent', status : 'transparent', word : "rat"},
                    {position: '7',p1State:'agent',p2State: 'assassin', status : 'transparent', word : "cake"},
                    {position: '8',p1State:'innocent',p2State: 'agent', status : 'transparent', word : "scroll"},
                    {position: '9',p1State:'agent',p2State: 'innocent', status : 'transparent', word : "sled"},
                    {position: '10',p1State:'innocent',p2State: 'agent', status : 'transparent', word : "bench"}],
                    
                    [{position: '11',p1State:'agent',p2State: 'innocent', status : 'transparent', word : "biscuit"},
                    {position: '12',p1State:'agent',p2State: 'innocent', status : 'transparent', word : "desk"},
                    {position: '13',p1State:'agent',p2State: 'innocent', status : 'transparent', word : "saddle"},
                    {position: '14',p1State:'innocent',p2State: 'innocent', status : 'transparent', word : "bucket"},
                    {position: '15',p1State:'agent',p2State: 'innocent', status : 'transparent', word : "beam"}],
                    
                    [{position: '16',p1State:'innocent',p2State: 'innocent', status : 'transparent', word : "coach"},
                    {position: '17',p1State:'innocent',p2State: 'agent', status : 'transparent', word : "frost"},
                    {position: '18',p1State:'innocent',p2State: 'innocent', status : 'transparent', word : "curry"},
                    {position: '19',p1State:'assassin',p2State: 'agent', status : 'transparent', word : "parade"},
                    {position: '20',p1State:'agent',p2State: 'agent', status : 'transparent', word : "london"}],
                    
                    [{position: '21',p1State:'innocent',p2State: 'innocent', status : 'transparent', word : "rock"},
                    {position: '22',p1State:'innocent',p2State: 'innocent', status : 'transparent', word : "floor"},
                    {position: '23',p1State:'innocent',p2State: 'assassin', status : 'transparent', word : "snake"},
                    {position: '24',p1State:'innocent',p2State: 'innocent', status : 'transparent', word : "break"},
                    {position: '25',p1State:'innocent',p2State: 'agent', status : 'transparent', word : "battle"}]
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
            }

            newGameCard.randomizer(this.wordArray);
            this.data.words = newGameCard.copyArray(this.wordArray);
            console.log('wordArray 1 is ', this.wordArray);
            console.log('wordArray 2 is ', this.wordArray2);
            newGameCard.constructCard(this.wordArray);
            
        }
            
        this.firebase.saveState(this.data);
        //if there is no current player / data, select 25 words and put them into firebase
            //then update firebase with new obj
        //otherwise, just update your local data with the firebase data and rewrite board

    }

    getData() {
        return this.data;
    }
    
    handleFirebaseUpdate( data ){     //checks firebase data and makes changes
        console.log('this data is ', data);
        //do something with the data
        $("#clueDisplay").text(data.clue);
        $("#numberDisplay").text(data.number);
debugger
        var gameBoard = this.data.gameBoard;
        for (var gBY = 0; gBY < gameBoard.length; gBY++) {
            for (var gBX = 0; gBX < gameBoard[gBY].length; gBX++) {
                $(`[xpos='${gBX}'][ypos='${gBY}]`).css('background-color: ' + gameBoard[gBY][gBX].status)
            }
        }


        // this.checkCurrentPlayer(data.currentPlayer)
        this.updateDB(data);

    }

    checkCurrentPlayer(playerNum){
        if(playerNum===this.myPlayerNum){
            $(".gameareainput").show();
        } else {
            $(".gameareainput").hide();
        }
    }

    updateDB(data){
        this.firebase.saveState(data);
    }

    giveNewClue( word, number){
        this.data.clue = word;
        this.data.number = number;
        this.updateDB(this.data);
    }

    createCard() {
        this._card = new Cards()
    }

    giveNewClue( word, number){
        this.data.clue = word;
        this.data.number = number;
        this.updateDB(this.data);
    }



// class Cards{
//     constructor( initialWord, p1State, p2State){
//         this.data = {
//             word: initialWord,
//             p1State: p1State,
//             p2State: p2State
//         }
//     }
//     updateData( newData ){
//         this.data.word = newData.word;
//         this.data.p1State = newData.p1State;
//         this.data.p2State = newData.p2State;
//         this.card.text( this.data.word);
//     }

//     render(){
//         this.card = $("<div>").text(this.data.word);
//     }
// }

    
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
        console.log("player", player);
        if(player == 'P1') {
            if (gBoard[clickedCardY][clickedCardX].p1State === 'innocent') {
                clickedCardClass.css({'background-color': 'yellow'});
                gBoard[clickedCardY][clickedCardX].status === 'yellow';
            } else if (gBoard[clickedCardY][clickedCardX].p1State === 'assassin') {
                clickedCardClass.css({'background-color': 'black'});
                gBoard[clickedCardY][clickedCardX].status === 'black';
                $('.modal').show();
            } else if (gBoard[clickedCardY][clickedCardX].p1State === 'agent') {
                clickedCardClass.css({'background-color': 'green'});
                gBoard[clickedCardY][clickedCardX].status === 'green';
            }
        } else {  
            if (gBoard[clickedCardY][clickedCardX].p2State === 'innocent') {
                clickedCardClass.css({'background-color': 'yellow'});
                gBoard[clickedCardY][clickedCardX].status === 'yellow';
            } else if (gBoard[clickedCardY][clickedCardX].p2State === 'assassin') {
                clickedCardClass.css({'background-color': 'black'});
                gBoard[clickedCardY][clickedCardX].status === 'black';
                $('.modal').show();
            } else if (gBoard[clickedCardY][clickedCardX].p2State === 'agent') {
                clickedCardClass.css({'background-color': 'green'});
                gBoard[clickedCardY][clickedCardX].status === 'green';
            }
       }
        
    }
}