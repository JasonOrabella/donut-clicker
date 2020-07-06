export { DonutMaker };

class DonutMaker {
  constructor() {
    this._donutCount = 0;
    this._donutsProduced =0;
  }

  getDonutCount() {
    return this._donutCount;
  }

  recordClick() {
    this._donutCount++;
    this._donutsProduced++;
  }
  addDonuts(){
    this._donutCount++
  }
}