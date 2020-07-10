import { DonutMaker } from "./DonutMaker.js";
import { HtmlWiringHelper } from "./HtmlWiringHelper.js";
import { donutAutoClicker} from "./donutAutoClicker.js";
import {donutMultiplier} from "./donutMultiplier.js";

const donutMaker = new DonutMaker();
const donutAC = new donutAutoClicker();
const donutM = new donutMultiplier();
const wiringHelper = new HtmlWiringHelper(donutMaker,donutM,donutAC);


const donutCount = document.querySelector(".donut-count");
const clickButton = document.querySelector(".click-button");
const autoClickButton = document.querySelector(".autoClickButton");
const multiplierButton = document.querySelector(".multiplier");
const multiplierLevel =  document.querySelector(".multiplier-level");
const autoMultiplierCost = document.querySelector(".auto-multiplier-cost");
const acCount =  document.querySelector(".acCount");
const acPrice =  document.querySelector(".acPrice");

wiringHelper.updateMultiplierButtonDisplay(autoMultiplierCost);
wiringHelper.updateDonutCountDisplay(donutCount);
wiringHelper.updateACCountDisplay(acPrice);
wiringHelper.updateACButtonDisplay(acPrice);




clickButton.addEventListener("click", () => {
  donutMaker.recordClick(donutM.donutsPerClick);
  wiringHelper.updateDonutCountDisplay(donutCount);
  
});

multiplierButton.addEventListener("click", () => {
  if (donutMaker.getDonutCount() >= donutM.price){
  donutMaker.reduceDonuts(donutM.price);
  wiringHelper.updateDonutCountDisplay(donutCount);
  
  donutM.recordMultiplierClick();
  wiringHelper.updateMultiplierCountDisplay(multiplierLevel);
  wiringHelper.updateMultiplierButtonDisplay(autoMultiplierCost);
  }
  else{
    // alert("Must Construct Additional Pylons")
  }
});
autoClickButton.addEventListener("click", () => {

  if (donutMaker.getDonutCount() >= donutAC.acPrice){
    donutMaker.reduceDonuts(donutAC.acPrice);
    wiringHelper.updateDonutCountDisplay(donutCount);
    donutAC.recordACClick();
    wiringHelper.updateACCountDisplay(acCount);
    wiringHelper.updateACButtonDisplay(acPrice);

    setInterval(function(){ 
      donutMaker.increaseDonutsBy(donutAC.acLevel);
      wiringHelper.updateDonutCountDisplay(donutCount); }, 1000);
  }

});
