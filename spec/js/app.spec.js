

const donut =document.createElement("cookie");
donut.innerHTML ="Give me the cookie";

const body = document.getElementsByTagName("body")[0]
body.appendChild(donut);;

donut.addEventListener ("click", function() {
    alert("did something");
});
//
// *//
// // 1. Create the button
// var button = document.createElement("button");
// button.innerHTML = "Do Something";
//
// // 2. Append somewhere
// var body = document.getElementsByTagName("body")[0];
// body.appendChild(button);
//
// // 3. Add event handler
// button.addEventListener ("click", function() {
//     alert("did something");
// });//