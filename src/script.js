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

// function Increment() {
//     this.add = 0;
// }

// Increment.prototype.addOne() {
//     return this.add++;
// }