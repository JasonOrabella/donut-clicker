import { DonutMaker } from "./DonutMaker.js";
import { HtmlWiringHelper } from "./HtmlWiringHelper.js";
import { donutAutoClicker} from "./donutAutoClicker.js";
import {donutMultiplier} from "./donutMultiplier.js";

const donutMaker = new DonutMaker();
const donutAC = new donutAutoClicker();
const donutM = new donutMultiplier();
const wiringHelper = new HtmlWiringHelper(donutMaker,donutM,donutAC);

// const donutAutoClicker = new donutAutoClicker();
const donutCount = document.querySelector(".donut-count");
const clickButton = document.querySelector(".click-button");
const autoClickButton = document.querySelector(".autoClickButton");
const multiplierButton = document.querySelector(".multiplier");
const multiplierLevel =  document.querySelector(".multiplier-level");
const autoMultiplierCost = document.querySelector(".auto-multiplier-cost");
const acCount =  document.querySelector(".acCount");
const acPrice =  document.querySelector(".acPrice");
//donut multiplier donuts *= 1.2
//donut mulitplier cost =10 *=1.1.


//setInterval(donutMaker.recordClick(donutM.donutsPerClick),1000);
//setInterval(wiringHelper.updateDonutCountDisplay(donutCount),250);
wiringHelper.updateMultiplierButtonDisplay(autoMultiplierCost);
wiringHelper.updateDonutCountDisplay(donutCount);
wiringHelper.updateACCountDisplay(acPrice);
wiringHelper.updateACButtonDisplay(acPrice);




clickButton.addEventListener("click", () => {
  donutMaker.recordClick(donutM.donutsPerClick);
  wiringHelper.updateDonutCountDisplay(donutCount);
  
});

multiplierButton.addEventListener("click", () => {
  donutMaker.reduceDonuts(donutM.price);
  wiringHelper.updateDonutCountDisplay(donutCount);
  
  donutM.recordMultiplierClick();
  wiringHelper.updateMultiplierCountDisplay(multiplierLevel);
  wiringHelper.updateMultiplierButtonDisplay(autoMultiplierCost);

  

  // wiringHelper.updateDonutCountDisplay(donutCount);
});
autoClickButton.addEventListener("click", () => {
  //donutMaker.makeDonuts();
  //flag = 1;
  if (donutMaker.getDonutCount() >= donutAC.acPrice){
    donutMaker.reduceDonuts(donutAC.acPrice);
    wiringHelper.updateDonutCountDisplay(donutCount);
    donutAC.recordACClick();
    wiringHelper.updateACCountDisplay(acCount);
    wiringHelper.updateACButtonDisplay(acPrice);

    setInterval(function(){ 
      //donutMaker.recordClick(donutM.donutsPerClick);
      donutMaker.increaseDonutsBy(donutAC.acLevel);
      wiringHelper.updateDonutCountDisplay(donutCount); }, 1000);
  }
  // while (flag){
  //   donutMaker.recordClick(donutM.donutsPerClick);
  //   wiringHelper.updateDonutCountDisplay(donutCount);
  // }
  //wiringHelper.updateDonutCountDisplay(donutCount);
});



// function alertFunc() {
 
// }

  // setInterval(function(){
  //   donutMaker.recordClick(); }, );

//}

//   donutMaker.recordClick();
//   wiringHelper.updateDonutCountDisplay(donutCount);
// });