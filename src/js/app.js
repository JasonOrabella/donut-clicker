import { DonutMaker } from "./DonutMaker.js";
import { HtmlWiringHelper } from "./HtmlWiringHelper.js";
const donutMaker = new DonutMaker();
const wiringHelper = new HtmlWiringHelper(donutMaker);
const donutCount = document.querySelector(".donut-count");
const clickButton = document.querySelector(".click-button");
const autoClickButton =document.querySelector(".autoClickButton")


setInterval(donutMaker.addDonuts(),1000);
setInterval(wiringHelper.updateDonutCountDisplay(donutCount),120);

clickButton.addEventListener("click", () => {
  donutMaker.recordClick();
  wiringHelper.updateDonutCountDisplay(donutCount);
});



autoClickButton.addEventListener("click", () => {
  donutMaker.addDonuts();
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

