class Cards{
    constructor( initialWord, p1State, p2State){
        this.data = {
            word: initialWord,
            p1State: p1State,
            p2State: p2State
        }
    }
    updateData( newData ){
        this.data.word = newData.word;
        this.data.p1State = newData.p1State;
        this.data.p2State = newData.p2State;
        this.card.text( this.data.word);
    }

    render(){
        this.card = $("<div>").text(this.data.word);
    }
}

var sampleGameState = {
    currentPlayer: null,
    players: [],
    gameBoard: [
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
    ],
    playerStats: {
        p1: {
            agentsRemaining: 5
        }
    }
}
// after first player joins
var sampleGameState = {
    currentPlayer: null,
    players: ['james'],
    gameBoard: [
        [{word: 'moscow', p1State: 'innocent', p2State:'assassin'},'','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
    ]
}
class Codenames{
    constructor() {
        this.displayCards = [];
        this._card;
        this._player;
        this.handleFirebaseUpdate = this.handleFirebaseUpdate.bind( this );
        this.handleInitialGameState = this.handleInitialGameState.bind( this );
        this.firebaseLoaded = this.firebaseLoaded.bind(this);
        this.firebase = new CodenamesFBObject('CodenamesDuet', this.handleFirebaseUpdate, this.firebaseLoaded);
        
    }
    firebaseLoaded(){
        this.firebase.getAllData( this.handleInitialGameState );
    }
    handleInitialGameState( data ){
        this.data = {
            name: 'james',
            age: 19,
            message: 'codenames'
        }
        this.firebase.saveState(this.data);
        //if there is no current player / data, select 25 words and put them into firebase
            //then update firebase with new obj
        //otherwise, just update your local data with the firebase data and rewrite board
    }
    handleFirebaseUpdate( data ){
        console.log('new data is ', data);
        //do something with the data
        
        

/*
    function updateGame(data){
		$(".input").text(data.message);
    }
*/
    }
    updateDB(){
        this.firebase.saveState(/*data here*/)
    }

    createCard() {
        
    }
}