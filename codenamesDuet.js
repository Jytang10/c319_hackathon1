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

// var sampleGameState = {
//     currentPlayer: null,
//     players: [],
//     gameBoard: [
//         ['','','','','',''],
//         ['','','','','',''],
//         ['','','','','',''],
//         ['','','','','',''],
//         ['','','','','',''],
//     ],
//     playerStats: {
//         p1: {
//             agentsRemaining: 5
//         }
//     }
// }
// // after first player joins
// var sampleGameState = {
//     currentPlayer: null,
//     players: ['james'],
//     gameBoard: [
//         [{word: 'moscow', p1State: 'innocent', p2State:'assassin'},'','','','',''],
//         ['','','','','',''],
//         ['','','','','',''],
//         ['','','','','',''],
//         ['','','','','',''],
//     ]
// }
class Codenames{
    constructor(player) {
        this.displayCards = [];
        this._card;
        this._player = player;
        this.handleFirebaseUpdate = this.handleFirebaseUpdate.bind( this );
        this.handleInitialGameState = this.handleInitialGameState.bind( this );
        this.firebaseLoaded = this.firebaseLoaded.bind(this);
        this.firebase = new CodenamesFBObject('CodenamesDuet', this.handleFirebaseUpdate, this.firebaseLoaded);
        this.addNewPlayer = this.addNewPlayer.bind( this );
    
    }
    firebaseLoaded(){
        this.firebase.getAllData( this.handleInitialGameState );
    }
    handleInitialGameState( data ){
        debugger;
        // this.data = {
        //     name: 'james',
        //     age: 29,
        //     message: 'codenames'
        // }

        // //initial game state
        // this.data = {
        //     currentPlayer: null,
        //     players: [],
        //     gameBoard: [
        //         ['','','','','',''],
        //         ['','','','','',''],
        //         ['','','','','',''],
        //         ['','','','','',''],
        //         ['','','','','',''],
        //     ],
        //     playerStats: {
        //         p1: {
        //             agentsRemaining: 8
        //         },
        //         p2: {
        //             agentsRemaining: 8
        //         }
        //     }
            
        // }
        if (data) {
            this.data = data;
            this.data.players.push(this._player);
        } else {
            this.data = {
                currentPlayer: null,
                players: [this._player],
                words: [],
                gameBoard: [
                    [{position: 'num1',p1State:'innocent',p2State:'assassin'},{position: 'num2',p1State:'innocent',p2State:'assassin'},{position: 'num3',p1State:'innocent',p2State:'assassin'},{position: 'num4',p1State:'innocent',p2State:'agent'},{position: 'num5',p1State:'innocent',p2State:'agent'}],
                    [{position: 'num6',p1State:'assassin',p2State:'innocent'},{position: 'num7',p1State:'assassin',p2State:'innocent'},{position: 'num8',p1State:'assassin',p2State:'innocent'},{position: 'num9',p1State:'innocent',p2State:'agent'},{position: 'num10',p1State:'innocent',p2State:'agent'}],
                    [{position: 'num11',p1State:'innocent',p2State:'agent'},{position: 'num12',p1State:'innocent',p2State:'agent'},{position: 'num13',p1State:'innocent',p2State:'agent'},{position: 'num14',p1State:'agent',p2State:'innocent'},{position: 'num15',p1State:'agent',p2State:'innocent'}],
                    [{position: 'num16',p1State:'agent',p2State:'innocent'},{position: 'num17',p1State:'agent',p2State:'innocent'},{position: 'num18',p1State:'agent',p2State:'innocent'},{position: 'num19',p1State:'agent',p2State:'innocent'},{position: 'num20',p1State:'agent',p2State:'innocent'}],
                    [{position: 'num21',p1State:'agent',p2State:'innocent'},{position: 'num22',p1State:'innocent',p2State:'innocent'},{position: 'num23',p1State:'innocent',p2State:'innocent'},{position: 'num24',p1State:'innocent',p2State:'innocent'},{position: 'num25',p1State:'innocent',p2State:'innocent'}],
                ],
                playerStats: {
                    p1: {
                        agentsRemaining: 8
                    },
                    p2: {
                        agentsRemaining: 8
                    }
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

        // this.data = $('.clue').text();
        // this.firebase.saveState(this.data);
/*
    function updateGame(data){
		$(".input").text(data.message);
    }
*/
    }
    updateDB(){
        this.firebase.saveState(this.data)
    }

    addNewPlayer(player){
        this.data.players.push(player);
        this.updateDB();
    }

    createCard() {
        
    }
}