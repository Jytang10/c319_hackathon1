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

        this.data = null;
        // this.data = {
        //     currentPlayer: 0,
        //     players: [],
        //     words: [],
        //     gameBoard1: 
        //         [
        //             [{position: 'num1',p1State:'assassin'},{position: 'num2',p1State:'assassin'},{position: 'num3',p1State:'assassin'},{position: 'num4',p1State:'innocent'},{position: 'num5',p1State:'innocent'}],
        //             [{position: 'num6',p1State:'agent'},{position: 'num7',p1State:'agent'},{position: 'num8',p1State:'agent'},{position: 'num9',p1State:'innocent'},{position: 'num10',p1State:'innocent'}],
        //             [{position: 'num11',p1State:'agent'},{position: 'num12',p1State:'agent'},{position: 'num13',p1State:'agent'},{position: 'num14',p1State:'innocent'},{position: 'num15',p1State:'innocent'}],
        //             [{position: 'num16',p1State:'agent'},{position: 'num17',p1State:'agent'},{position: 'num18',p1State:'agent'},{position: 'num19',p1State:'innocent'},{position: 'num20',p1State:'innocent'}],
        //             [{position: 'num21',p1State:'agent'},{position: 'num22',p1State:'agent'},{position: 'num23',p1State:'agent'},{position: 'num24',p1State:'innocent'},{position: 'num25',p1State:'innocent'}]
        //         ], 
        // //    gameBoard2: 
        // //     [
        // //     [{position: 'num1',p2State:'assassin'},{position: 'num2',p2State:'assassin'},{position: 'num3',p2State:'assassin'},{position: 'num4',p2State:'innocent'},{position: 'num5',p2State:'innocent'}],
        // //     [{position: 'num6',p2State:'agent'},{position: 'num7',p2State:'agent'},{position: 'num8',p2State:'agent'},{position: 'num9',p2State:'innocent'},{position: 'num10',p2State:'innocent'}],
        // //     [{position: 'num11',p2State:'agent'},{position: 'num12',p2State:'agent'},{position: 'num13',p2State:'agent'},{position: 'num14',p2State:'innocent'},{position: 'num15',p2State:'innocent'}],
        // //     [{position: 'num16',p2State:'agent'},{position: 'num17',p2State:'agent'},{position: 'num18',p2State:'agent'},{position: 'num19',p2State:'innocent'},{position: 'num20',p2State:'innocent'}],
        // //     [{position: 'num21',p2State:'agent'},{position: 'num22',p2State:'agent'},{position: 'num23',p2State:'agent'},{position: 'num24',p2State:'innocent'},{position: 'num25',p2State:'innocent'}]
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
            this.data.players.push(this.newPlayer)
            // var tempPlayer = this.data.players;
            // var playerNames = [];
            // debugger
            // this.playerNames.push(tempPlayer);
            // this.playerNames.push(this.newPlayer);
            // this.data.players = playerNames;
            console.log('player list',this.data.players);
        } else {
            // this.data.players.push(newPlayer);
            this.data = {
                currentPlayer: null,
                players : [this.newPlayer],
                words: [],
                gameBoard: [
                    [{position: 'num1',p1State:'assassin'},{position: 'num2',p1State:'assassin'},{position: 'num3',p1State:'assassin'},{position: 'num4',p1State:'innocent'},{position: 'num5',p1State:'innocent'}],
                    [{position: 'num6',p1State:'agent'},{position: 'num7',p1State:'agent'},{position: 'num8',p1State:'agent'},{position: 'num9',p1State:'innocent'},{position: 'num10',p1State:'innocent'}],
                    [{position: 'num11',p1State:'agent'},{position: 'num12',p1State:'agent'},{position: 'num13',p1State:'agent'},{position: 'num14',p1State:'innocent'},{position: 'num15',p1State:'innocent'}],
                    [{position: 'num16',p1State:'agent'},{position: 'num17',p1State:'agent'},{position: 'num18',p1State:'agent'},{position: 'num19',p1State:'innocent'},{position: 'num20',p1State:'innocent'}],
                    [{position: 'num21',p1State:'agent'},{position: 'num22',p1State:'agent'},{position: 'num23',p1State:'agent'},{position: 'num24',p1State:'innocent'},{position: 'num25',p1State:'innocent'}]
                ], 
                playerStats: {
                    p1: {
                        agentsRemaining: 8
                    },
                    p2: {
                        agentsRemaining: 8
                    }
                },
                clue:null,
                number:null
            }
            for(var x = 0; x < 5; x++){
                for ( var y = 0; y< 5; y++){
                    var randomIndex = Math.floor(this.wordArray.length * Math.random());
                    var randomWord = this.wordArray[ randomIndex];
                    this.wordArray.splice(randomIndex,1);
                    this.data.gameBoard[y][x].word = randomWord;
                }
            }
        }
            
        this.firebase.saveState(this.data);
        //if there is no current player / data, select 25 words and put them into firebase
            //then update firebase with new obj
        //otherwise, just update your local data with the firebase data and rewrite board

    }
    
    handleFirebaseUpdate( data ){
        console.log('new data is ', data);
        //do something with the data
        $("#clueDisplay").text(data.clue);
        $("#numberDisplay").text(data.number);
        this.updateDB(data);
    }
    updateDB(){
        this.firebase.saveState(this.data)
    }

    createCard() {
        this._card = new Cards()
    }
}
