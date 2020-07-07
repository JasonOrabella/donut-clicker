export { donutMultiplier };

class donutMultiplier {
  constructor() {
    this.price = 5;
    this.level =0;
    this.donutsPerClick = 1;
    
  }

  getMultiplierCount() {
    return this.level;
  }

  getPrice(){
      return this.price;
  }

  recordMultiplierClick() {
    this.level++;
    this.price *= 1.1;
    this.donutsPerClick *= 1.2;
    // We need to reduce the number of donuts by price
  }
  makeDonuts(){
    this._donutCount++;
  }

}