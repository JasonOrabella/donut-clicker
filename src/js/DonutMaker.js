export { DonutMaker };

class DonutMaker {
  constructor() {
    this._donutCount = 0;
  }

  getDonutCount() {
    return this._donutCount;
  }

  recordClick(donutsPerClick) {
    //this._donutCount++;
    this._donutCount = this._donutCount +donutsPerClick;
  }
  reduceDonuts(donutPrice){
    this._donutCount = this._donutCount - donutPrice;
  }

}