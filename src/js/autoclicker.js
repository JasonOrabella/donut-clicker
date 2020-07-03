//Auto Clickers apply one click per second for every Auto Clicker purchased. 
//The number of donuts required to purchase an Auto Clicker. Starting cost is 100 donuts. 
//For each Auto Clicker purchased, the cost of the next Auto Clicker increases by 10%.


https://codereview.stackexchange.com/questions/179187/my-own-cookie-clicker-game

// autoclicker()=>{ 
//     setInterval(function){

//     }
// }
// activateAutoClickers(){




    const donutAutoClicker = (autoClicker, element) => {
        let i = 0;
        setInterval(() => {
            element.innerText = autoClicker[i];
            i++;
            if (i == autoClicker.length) {
                i = 0;
            }
        }, 1000);
    }
