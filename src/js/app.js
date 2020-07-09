import { DonutMaker } from "./DonutMaker.js";
import { HtmlWiringHelper } from "./HtmlWiringHelper.js";
import { donutAutoClicker} from "./donutAutoClicker.js";
import {donutMultiplier} from "./donutMultiplier.js";

const donutMaker = new DonutMaker();
<<<<<<< HEAD
const donutAC = new donutAutoClicker();
const donutM = new donutMultiplier();
const wiringHelper = new HtmlWiringHelper(donutMaker,donutM,donutAC);

=======
const donutAC = new donutAutoClicker(donutMaker);
const donutM = new donutMultiplier();
const wiringHelper = new HtmlWiringHelper(donutMaker,donutM);

// const donutAutoClicker = new donutAutoClicker();
>>>>>>> master
const donutCount = document.querySelector(".donut-count");
const clickButton = document.querySelector(".click-button");
const autoClickButton = document.querySelector(".autoClickButton");
const multiplierButton = document.querySelector(".multiplier");
const multiplierLevel =  document.querySelector(".multiplier-level");
const autoMultiplierCost = document.querySelector(".auto-multiplier-cost");
<<<<<<< HEAD
const acCount =  document.querySelector(".acCount");
const acPrice =  document.querySelector(".acPrice");

wiringHelper.updateMultiplierButtonDisplay(autoMultiplierCost);
wiringHelper.updateDonutCountDisplay(donutCount);
wiringHelper.updateACCountDisplay(acPrice);
wiringHelper.updateACButtonDisplay(acPrice);

=======
//donut multiplier donuts *= 1.2
//donut mulitplier cost =10 *=1.1.


setInterval(donutMaker.recordClick(donutM.donutsPerClick),1000);
//setInterval(wiringHelper.updateDonutCountDisplay(donutCount),250);
//wiringHelper.updateMultiplierButtonDisplay(autoMultiplierCost);
wiringHelper.updateDonutCountDisplay(donutCount);
>>>>>>> master



clickButton.addEventListener("click", () => {
  donutMaker.recordClick(donutM.donutsPerClick);
  wiringHelper.updateDonutCountDisplay(donutCount);
  
});

multiplierButton.addEventListener("click", () => {
<<<<<<< HEAD

  if (donutMaker.getDonutCount() >= donutM.price){
  donutMaker.reduceDonuts(donutM.price);
  wiringHelper.updateDonutCountDisplay(donutCount);
  
  donutM.recordMultiplierClick();
  wiringHelper.updateMultiplierCountDisplay(multiplierLevel);
  wiringHelper.updateMultiplierButtonDisplay(autoMultiplierCost);
  }
  else{
   
  }
=======
  donutMaker.reduceDonuts(donutM.price);
  wiringHelper.updateDonutCountDisplay(donutCount);
  
  donutM.recordMultiplierClick();
  wiringHelper.updateMultiplierCountDisplay(multiplierLevel);
  wiringHelper.updateMultiplierButtonDisplay(autoMultiplierCost);

  

  // wiringHelper.updateDonutCountDisplay(donutCount);
>>>>>>> master
});
autoClickButton.addEventListener("click", () => {
  //donutMaker.makeDonuts();
  wiringHelper.updateDonutCountDisplay(donutCount);
});

autoClickButton.addEventListener("click", () => {
  if (donutMaker.getDonutCount() >= donutAC.acPrice){
    donutMaker.reduceDonuts(donutAC.acPrice);
    wiringHelper.updateDonutCountDisplay(donutCount);
    donutAC.recordACClick();
    wiringHelper.updateACCountDisplay(acCount);
    wiringHelper.updateACButtonDisplay(acPrice);

<<<<<<< HEAD
    setInterval(function(){ 
      // donutMaker.recordClick(donutM.donutsPerClick);
      // line above if the dones per click is supposed to be increased by multiplier
      donutMaker.increaseDonutsBy(donutAC.acLevel);
      wiringHelper.updateDonutCountDisplay(donutCount); }, 1000);
  }

});
=======

// class Upgrade
// {
// 	constructor(name, productivity, price)
// 	{
// 		this.name = name;
// 		this.level = 0;
// 		this.price = price;
//     this.productivity = productivity;
  
//   Autocookies{}

  // setInterval(donutMaker.addDonut(this), 1000);
  // }
// }
  // function renew_cookies()
// {	donutMaker.innerHTML = updateDonutCountDisplay

h
>>>>>>> master
