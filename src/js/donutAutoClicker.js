export{donutAutoClicker};

donutPrice = 10;
upgradeLevel =0;

if (autoClickButton && _donutCount >= donutPrice) {
    this.upgradeLevel+=1;
    this.donutPrice*=1.1;
    this._donutCount - donutPrice;
    }
    else {
        alert("Hello")
    }


setInterval(function(){
     _donutCount+=1*upgradeLevel ; }, 1000);

autoClickButton.addEventListener("click", () => {
    autoClickButton.recordClick();
    wiringHelper.updateDonutCountDisplay(donutCount);
  });
  
// 
// level should increase by 1
// donut price should increase by +=10%




    // const donutAutoClicker = (autoClicker, element) => {
    //     let i = 0;
    //     setInterval(() => {
    //         element.innerText = autoClicker[i];
    //         i++;
    //         if (i == autoClicker.length) {
    //             i = 0;
    //         }
    //     }, 1000);
    // }

// //Auto Clickers apply one click per second for every Auto Clicker purchased. 
// //The number of donuts required to purchase an Auto Clicker. Starting cost is 100 donuts. 
// //For each Auto Clicker purchased, the cost of the next Auto Clicker increases by 10%.


// https://codereview.stackexchange.com/questions/179187/my-own-cookie-clicker-game

//     class donutAutoClicker{

//         constructor(name,donutPrice,upgradeLevel,upgradeFunction){
//             this.name = name;
//             this.donutPrice=  10;
//             this.upgradeLevel =  upgradeLevel;
//             this.upgradeFunction =  upgradeFunction;
//         }
//     }
    
        
    

// this.name =autoClicker;
// this.donutPrice= 10;
// this.upgradeLevel=0;
// this.upgradeFunction= autoClicker;
//     }
//     }
