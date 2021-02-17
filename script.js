class Increment {
    constructor () {
        this.add = 0;
    }
 
     addOne(){
         return this.add++;
     }
 }
 
 const incrementOne = new Increment();
 incrementOne.addOne();
 
 // export de fault Increment;