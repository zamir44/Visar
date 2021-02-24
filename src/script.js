export default class Increment {
    constructor () {
        this.add = 0;
    }

    addOne(){
        return this.add++;
    }
}

const incrementOne = new Increment();
incrementOne.addOne();


console.log(incrementOne.addOne())

//////////////////////////////////////////

var Incremento = function () {
    this.add = 0;
}

Incremento.prototype.addOne = function() {
    return this.add++;
}

const incrementOnes = new Incremento();
incrementOnes.addOne();

console.log(incrementOne.addOne())