export { HtmlWiringHelper };

class HtmlWiringHelper {
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
  }
  updateDonutCountDisplay(element) {
    element.innerText = this.donutMaker.getDonutCount();
  }
}
