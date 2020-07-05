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
 //donutAC.recordClick2();
 //donutMaker.recordClick();
 //while (true){
  //donutMaker.recordClick();
  //donutMaker.recordClick();
  myVar = setInterval(donutMaker.recordClick(),1000);
  // myVar = setTimeout(1000);
  wiringHelper.updateDonutCountDisplay(donutCount);
// }

  // setInterval(function(){
  //   donutMaker.recordClick(); }, 1000);
  // wiringHelper.updateDonutCountDisplay(donutCount);
});


// function alertFunc() {
 
// }

  // setInterval(function(){
  //   donutMaker.recordClick(); }, );

//}

//   donutMaker.recordClick();
//   wiringHelper.updateDonutCountDisplay(donutCount);
// });