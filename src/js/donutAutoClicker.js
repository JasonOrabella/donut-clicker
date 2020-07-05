export{donutAutoClicker};


class donutAutoClicker{

    constructor(donutMaker) {
        this.donutMaker = donutMaker;
        this._autoClickerCount = 0;
      }
    
      getDonutACCount() {
        return this._autoClickerCount;
      }
    
      recordClick2() {
        this._autoClickerCount++;
      }

    //   autoIncrement(){
    //       setInterval(this.donutMaker,1000);
    //   }
}
