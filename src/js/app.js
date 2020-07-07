import { DonutMaker } from "./DonutMaker.js";
import { HtmlWiringHelper } from "./HtmlWiringHelper.js";
import { donutAutoClicker} from "./donutAutoClicker.js";
import {donutMultiplier} from "./donutMultiplier.js";

const donutMaker = new DonutMaker();
const donutAC = new donutAutoClicker(donutMaker);
const donutM = new donutMultiplier();
const wiringHelper = new HtmlWiringHelper(donutMaker,donutM);

// const donutAutoClicker = new donutAutoClicker();
const donutCount = document.querySelector(".donut-count");
const clickButton = document.querySelector(".click-button");
const autoClickButton = document.querySelector(".autoClickButton");
const multiplierButton = document.querySelector(".multiplier");
const multiplierLevel =  document.querySelector(".multiplier-level");
const autoMultiplierCost = document.querySelector(".auto-multiplier-cost");
//donut multiplier donuts *= 1.2
//donut mulitplier cost =10 *=1.1.


setInterval(donutMaker.recordClick(donutM.donutsPerClick),1000);
//setInterval(wiringHelper.updateDonutCountDisplay(donutCount),250);
//wiringHelper.updateMultiplierButtonDisplay(autoMultiplierCost);
wiringHelper.updateDonutCountDisplay(donutCount);



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
  wiringHelper.updateDonutCountDisplay(donutCount);
});



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