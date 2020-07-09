export { HtmlWiringHelper };

class HtmlWiringHelper {
<<<<<<< HEAD
  constructor(donutMaker,donutMultiplier,donutAutoClicker) {
    this.donutMaker = donutMaker;
    this.donutMultiplier = donutMultiplier;
    this.donutAutoClicker = donutAutoClicker;
=======
  constructor(donutMaker,donutMultiplier) {
    this.donutMaker = donutMaker;
    this.donutMultiplier = donutMultiplier;
  }
  updateDonutCountDisplay(element) {
    element.innerText = this.donutMaker.getDonutCount();
    
  }
  updateMultiplierCountDisplay(element1) {
    element1.innerText = this.donutMultiplier.getMultiplierCount();
  }
  updateMultiplierButtonDisplay(element2) {
    element2.innerText = this.donutMultiplier.getPrice();
>>>>>>> master
  }
  updateDonutCountDisplay(element) {
    element.innerText = this.donutMaker.getDonutCount();
    
  }
  updateMultiplierCountDisplay(element1) {
    element1.innerText = this.donutMultiplier.getMultiplierCount();
  }
  updateMultiplierButtonDisplay(element2) {
    element2.innerText = this.donutMultiplier.getPrice();
  }

  updateACCountDisplay(element3) {
    element3.innerText = this.donutAutoClicker.getACCount();
  }
  updateACButtonDisplay(element4) {
    element4.innerText = this.donutAutoClicker.getACPrice();
  }
}
