import { DonutMaker } from "./DonutMaker.js";
import { HtmlWiringHelper } from "./HtmlWiringHelper.js";
// import { donutAutoClicker} from "./donutAutoClicker.js";
const donutMaker = new DonutMaker();
const wiringHelper = new HtmlWiringHelper(donutMaker);
// const donutAutoClicker = new donutAutoClicker();
const donutCount = document.querySelector(".donut-count");
const clickButton = document.querySelector(".click-button");

clickButton.addEventListener("click", () => {
  donutMaker.recordClick();
  wiringHelper.updateDonutCountDisplay(donutCount);
});

