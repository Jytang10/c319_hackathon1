
class keyGenerator{
    constructor() {
        this._numArray = [];
        this._p1AgentArray = [];
        this._p1SinArray = [];
        this._p2AgentArray = [];
        this._p2Sin
    }

    get numArray() {
        return this._numArray;
    }

    get p1AgentArray() {
        return this._p1AgentArray;
    }

    get p1SinArray() {
        return this._p1AgentArray;
    }

    get p2AgentArray() {
        return this._p2AgentArray;
    }

    get p2SinArray() {
        return this._p2SinArray;
    }

    generateArray() {
        this._numArray = []
        for (var i = 1; i <= 25; i++) {
            this._numArray.push(i);
        }
    }

    p1AssignRole() {
        generateArray();
        for (var p1Index = 0; p1Index < 9; p1Index++) {
            var randNum = Math.floor(Math.random() * this.numArray.length);
            this.p1AgentArray.push('.num' + this.numArray[randNum]);
            this.numArray.splice(randNum, 1);
        }

        for (var p1Jindex = 0; p1Jindex < 3; p1Jindex++) {
            var randNum = Math.floor(Math.random() * this.numArray.length);
            this.p1AgentArray.push('.num' + this.numArray[randNum]);
            this.numArray.splice(randNum, 1);
        }
    }

    p2AssignRole() {
        generateArray();
        for (var p2Index = 0; p2Index < 9; p2Index++) {
            var randNum = Math.floor(Math.random() * this.numArray.length);
            this.p2AgentArray.push('.num' + this.numArray[randNum]);
            this.numArray.splice(randNum, 1);
        }

        for (var p2Jindex = 0; p2Jindex < 3; p2Jindex++) {
            var randNum = Math.floor(Math.random() * this.numArray.length);
            this.p2AgentArray.push('.num' + this.numArray[randNum]);
            this.numArray.splice(randNum, 1);
        }
    }
}