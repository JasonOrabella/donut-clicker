
const donutMaker = new donutMaker();
const donutCount = document.querySelector(".donut-count")
const clickButton = document.querySelector(".click-counter");

clickButton.addEventListener("click",()=>{
    donutMaker.recordClick();
    wiringHelper.updateDonutCountDisplay(donutCount);
})

const updateDonutCount = () => {
    donutCount.innerHTML = donutMaker.getDonutCount();
}



// const donut =document.createElement("cookie");
// donut.innerHTML ="Button";
//
// const body = document.getElementsByTagName("body")[0]
// body.appendChild(donut);;
//
// donut.addEventListener ("click", function() {
//     alert("did something");
// });
//
