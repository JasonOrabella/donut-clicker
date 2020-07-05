//Auto Clickers apply one click per second for every Auto Clicker purchased. 
//The number of donuts required to purchase an Auto Clicker. Starting cost is 100 donuts. 
//For each Auto Clicker purchased, the cost of the next Auto Clicker increases by 10%.


https://codereview.stackexchange.com/questions/179187/my-own-cookie-clicker-game

// autoclicker()=>{ 
//     setInterval(function){

//     }
// }
// activateAutoClickers(){

    class donutBuilding{
        constructor(name,donutPrice,upgradeLevel,upgradeFunction){
            this.name = new name;
    this.donutPrice= new donutPrice;
    this.upgradeLevel = new upgradeLevel;
    this.upgradeFunction = new upgradeFunction
    
        }
    }
this.name =autoClicker;
this.donutPrice= 100;
this.upgradeLevel=0;
this.upgradeFunction= donutAutoClicker;


autoClick.addEventListener("click",()=>{
  autoClick.recordclick();
  wiringHelper.updateDonutCountDisplay(donutMaker);
})
// 
// level should increase by 1
// donut price should increase by +=10%
if autoClick && _cookieamount >= donutPrice {
this.upgradeLevel+=1;
this.donutPrice*=1.1;
}
then {

))


    const donutAutoClicker = (autoClicker, element) => {
        //donut amount +1 
        
        let i = 0;
        setInterval(() => {
            element.innerText = autoClicker[i];
            i++;
            if (i == autoClicker.length) {
                i = 0;
            }
        }, 1000);
    }

