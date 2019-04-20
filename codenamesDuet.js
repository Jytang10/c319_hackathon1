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
        ];
        this.wordArray2;
        this.data = null;
        this.cardClicked = this.cardClicked.bind(this);
        this.giveNewClue = this.giveNewClue.bind(this);
        // this.data = {
        //     currentPlayer: 0,
        //     players: [],
        //     words: [],
        //     gameBoard1: 
        //         [
        //             [{position: '1',p1State:'assassin'},{position: '2',p1State:'assassin'},{position: '3',p1State:'assassin'},{position: '4',p1State:'innocent'},{position: '5',p1State:'innocent'}],
        //             [{position: '6',p1State:'agent'},{position: '7',p1State:'agent'},{position: '8',p1State:'agent'},{position: '9',p1State:'innocent'},{position: '10',p1State:'innocent'}],
        //             [{position: '11',p1State:'agent'},{position: '12',p1State:'agent'},{position: '13',p1State:'agent'},{position: '14',p1State:'innocent'},{position: '15',p1State:'innocent'}],
        //             [{position: '16',p1State:'agent'},{position: '17',p1State:'agent'},{position: '18',p1State:'agent'},{position: '19',p1State:'innocent'},{position: '20',p1State:'innocent'}],
        //             [{position: '21',p1State:'agent'},{position: '22',p1State:'agent'},{position: '23',p1State:'agent'},{position: '24',p1State:'innocent'},{position: '25',p1State:'innocent'}]
        //         ], 
        // //    gameBoard2: 
        // //     [
        // //     [{position: '1',p2State:'assassin'},{position: '2',p2State:'assassin'},{position: '3',p2State:'assassin'},{position: '4',p2State:'innocent'},{position: '5',p2State:'innocent'}],
        // //     [{position: '6',p2State:'agent'},{position: '7',p2State:'agent'},{position: '8',p2State:'agent'},{position: '9',p2State:'innocent'},{position: '10',p2State:'innocent'}],
        // //     [{position: '11',p2State:'agent'},{position: '12',p2State:'agent'},{position: '13',p2State:'agent'},{position: '14',p2State:'innocent'},{position: '15',p2State:'innocent'}],
        // //     [{position: '16',p2State:'agent'},{position: '17',p2State:'agent'},{position: '18',p2State:'agent'},{position: '19',p2State:'innocent'},{position: '20',p2State:'innocent'}],
        // //     [{position: '21',p2State:'agent'},{position: '22',p2State:'agent'},{position: '23',p2State:'agent'},{position: '24',p2State:'innocent'},{position: '25',p2State:'innocent'}]
        // //      ],
        //     playerStats: {
        //         p1: {
        //             agentsRemaining: 8
        //         },
        //         p2: {
        //             agentsRemaining: 8
        //         }
        //     }
        // }
        // for(var x = 0; x < 5; x++){
        //     for ( var y = 0; y< 5; y++){
        //         var randomIndex = Math.floor(this.wordArray.length * Math.random());
        //         var randomWord = this.wordArray[ randomIndex];
        //         this.wordArray.splice(randomIndex,1);
        //         this.data.gameBoard1[y][x].word = randomWord;
        //     }
        // }
        // for(var x = 0; x < 5; x++){
        //     for ( var y = 0; y< 5; y++){
        //         var randomIndex = Math.floor(this.wordArray.length * Math.random());
        //         var randomWord = this.wordArray[ randomIndex];
        //         this.wordArray.splice(randomIndex,1);
        //         this.data.gameBoard2[y][x].word = randomWord;
        //     }
        // }

    }
    firebaseLoaded(){
        // this.firebase.saveState(this.data)
        this.firebase.getAllData( this.handleInitialGameState );
    }
    handleInitialGameState( data ){
         //initial game state
       
        if (data && data.players) {
            this.data = data;
            this.data.currentPlayer = 1;
            this.data.players.push(this.newPlayer)
            // $('.keycard').css({'background-color': 'white'});
            // var tempPlayer = this.data.players;
            // var playerNames = [];
            // debugger
            // this.playerNames.push(tempPlayer);
            // this.playerNames.push(this.newPlayer);
            // this.data.players = playerNames;
            console.log('player list',this.data.players);
        } else {
            // this.data.players.push(newPlayer);
            console.log('true means can be clicked');
            this.data = {
                players : [this.newPlayer],
                words: [],
                gameBoard: [
                    [{position: '1',p1State:'innocent',p2State: 'innocent', status : true},
                    {position: '2',p1State:'innocent',p2State: 'agent', status : true},
                    {position: '3',p1State:'agent',p2State: 'innocent', status : true},
                    {position: '4',p1State:'agent',p2State: 'agent', status : true},
                    {position: '5',p1State:'assassin',p2State: 'assassin', status : true}],
                   
                    [{position: '6',p1State:'assassin',p2State: 'agent', status : true},
                    {position: '7',p1State:'agent',p2State: 'assassin', status : true},
                    {position: '8',p1State:'innocent',p2State: 'agent', status : true},
                    {position: '9',p1State:'agent',p2State: 'innocent', status : true},
                    {position: '10',p1State:'innocent',p2State: 'agent', status : true}],
                   
                    [{position: '11',p1State:'agent',p2State: 'innocent', status : true},
                    {position: '12',p1State:'agent',p2State: 'innocent', status : true},
                    {position: '13',p1State:'agent',p2State: 'innocent', status : true},
                    {position: '14',p1State:'innocent',p2State: 'innocent', status : true},
                    {position: '15',p1State:'agent',p2State: 'innocent', status : true}],
                   
                    [{position: '16',p1State:'innocent',p2State: 'innocent', status : true},
                    {position: '17',p1State:'innocent',p2State: 'agent', status : true},
                    {position: '18',p1State:'innocent',p2State: 'innocent', status : true},
                    {position: '19',p1State:'assassin',p2State: 'agent', status : true},
                    {position: '20',p1State:'agent',p2State: 'agent', status : true}],
                   
                    [{position: '21',p1State:'innocent',p2State: 'innocent', status : true},
                    {position: '22',p1State:'innocent',p2State: 'innocent', status : true},
                    {position: '23',p1State:'innocent',p2State: 'assassin', status : true},
                    {position: '24',p1State:'innocent',p2State: 'innocent', status : true},
                    {position: '25',p1State:'innocent',p2State: 'agent'}]
                ], 
                playerStats: {
                    p1: {
                        agentsRemaining: 8
                    },
                    p2: {
                        agentsRemaining: 8
                    }
                },
                clue : null,
                number : null
            }

            
            
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
        // this.checkCurrentPlayer(data.currentPlayer)
        // if(data.)
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
        console.log('clicked num', clickedCardClass);
        console.log('gboard is ',gBoard);
        console.log(event)
        console.log('gboard coord is', gBoard[clickedCardY][clickedCardX].p1State)
        if (gBoard[clickedCardY][clickedCardX].p1State === 'innocent') {
            clickedCardClass.css({'background-color': 'yellow'});
        } else if (gBoard[clickedCardY][clickedCardX].p1State === 'assassin') {
            clickedCardClass.css({'background-color': 'black'});
        } else if (gBoard[clickedCardY][clickedCardX].p1State === 'agent') {
            clickedCardClass.css({'background-color': 'green'});
        }
    }

    //gameboard에서 assasin인지 아닌지 정보 가져와서 게임 컨디션 if statement쓰기 
}