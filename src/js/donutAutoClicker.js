export { donutAutoClicker };

class donutAutoClicker {
  constructor() {
    this.acPrice = 100;
    this.acLevel =0;
    
  }

  getACCount() {
    return this.acLevel;
  }

  getACPrice(){
      return this.acPrice;
  }

  recordACClick() {
    this.acLevel++;
    this.acPrice *= 1.1;
    //this.donutsPerClick *= 1.2;
    // We need to reduce the number of donuts by price
  }

}