import { DonutMaker } from "./DonutMaker.js";
import { HtmlWiringHelper } from "./HtmlWiringHelper.js";
import { donutAutoClicker} from "./donutAutoClicker.js";
const donutMaker = new DonutMaker();
const donutAC = new donutAutoClicker(donutMaker);
const wiringHelper = new HtmlWiringHelper(donutMaker);
// const donutAutoClicker = new donutAutoClicker();
const donutCount = document.querySelector(".donut-count");
const clickButton = document.querySelector(".click-button");
const autoClickButton = document.querySelector(".autoClickButton");


clickButton.addEventListener("click", () => {
  donutMaker.recordClick();
  wiringHelper.updateDonutCountDisplay(donutCount);
});

autoClickButton.addEventListener("click", () => {
  donutMaker.recordClick();
  wiringHelper.updateDonutCountDisplay(donutCount);
});

class Building
{
	constructor(name, productivity, price)
	{
		this.name = name;
		this.level = 0;
		this.price = price;
    this.productivity = productivity;
  

setInterval(donutMaker.createDonuts.bind(this), 1000);
  }
}
  function renew_cookies()
{	donutMaker.innerHTML = updateDonutCountDisplay;
}

