"use strict";
console.log("Welcome Nitish");


let menuStatus = false;
const menuOpen = () => {
    document.querySelector("#menu").onclick = () => {
        document.querySelector("#menu-body").style.height = "100vh";
        document.querySelector("#menu-body-box").style.height = '80vh';
        menuStatus = true;

    }
}
const menuClose = () => {
    document.querySelector("#menu-body-close").onclick = () => {
        document.querySelector("#menu-body").style.height = "0vh";
        document.querySelector("#menu-body-box").style.height = '0vh';
        menuStatus = false;

    }
}

menuOpen()
menuClose()