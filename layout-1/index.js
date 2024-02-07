"use strict";
console.log("Welcome Nitish");

let closeLeftStatus = true;          // on
const closeLeft = () => {
    if (closeLeftStatus) {
        document.querySelector("#close-button > button").onclick = () => {
            document.querySelector("#left").style.width = "0%";
            closeLeftStatus = false
        }
    } else {
        
        document.querySelector("#close-button > button").onclick = () => {
            document.querySelector("#left").style.width = "20%";
            closeLeftStatus = false
        }
    }
}

closeLeft();