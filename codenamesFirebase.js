class CodenamesFBObject{
    constructor(codenamesDuet, codenameCallbackFunction, onLoadCallback){
        this.boardName = codenamesDuet;
        this.onLoadCallback = onLoadCallback;
        this.db = null;
        this.callback = codenameCallbackFunction;
        this.lastSend = null;
        
        this.start = this.start.bind( this );
        this.initialize();
    }
    initialize(){
        this.load();
    }
    load(){
        $.getScript('https://www.gstatic.com/firebasejs/3.6.8/firebase.js',this.start);
    }
    start(){
          this.db=firebase;
        this.db.initializeApp(firebaseConfig);
        this.registerListener();
    }
    saveState(newState){
        this.lastSend = JSON.stringify(newState);
        this.db.database().ref(this.boardName).set(newState);
    }
    getAllData( dataCallback ){
        this.db.database().ref(this.boardName).once('value', (snapShot)=>{
            dataCallback( snapShot.val() );
        });
    }
    registerListener(){
        this.db.database().ref(this.boardName).on('value',this.handleDataUpdate.bind(this));
        this.onLoadCallback();
    }
    handleDataUpdate(data){ //변화가 있을때마다 자동으로 변화를 데이터베이스에 업뎃함.
        var currentData = JSON.stringify(data.val());
        if(currentData!=this.lastSend){
            this.callback.call(null,data.val());
        }
    }
}