import { closeSignUp } from "./js_module/close_signUp.js";
import contentMenuAside from "./js_module/asideMenu.js";
import MenuAside from "./js_module/menuAside.js";
const d = document
d.addEventListener("DOMContentLoaded",e =>{
    closeSignUp(".signUp",".menuSignup")
    contentMenuAside(".contendMenuh5",".contentMenuAside")
    MenuAside(".btnaside",".menuSections")

})

// let w = window.innerHeight;
// const $containerwidth = d.querySelector(".menuSections")
// console.log($containerwidth);
// $containerwidth.innerHTML = `<h2>${w}</h2>`

// console.log(w);

let intervalTime = setInterval(() => {
    // console.log(new Date().toLocaleTimeString());
    let horas = new Date().toLocaleTimeString()
    const div = document.querySelector(".clockfollowed").innerHTML = `<h1>${horas}</h1>`

}, 1000);


// const div = document.querySelector(".clockfollowed").innerHTML = `<h1>20:11</h1>`
// const div = document.querySelector(".clockfollowed").innerHTML = `<h1>${clockHour.getHours()}:${clockHour.getMinutes()}</h1>`
const div = document.querySelector(".clockfollowed").innerHTML = `<h1>here_hour</h1>`
// console.log(div);

// console.log(intervalTime);


