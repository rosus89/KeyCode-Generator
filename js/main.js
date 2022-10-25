"use strict"

const key = document.querySelector(".key");
const keyCode = document.querySelector(".keyCode");
const charCode = document.querySelector(".charCode");
const welcome = document.querySelector(".welcome");
const wrapper = document.querySelector(".wrapper")


this.addEventListener("keypress", (e) => {
    welcome.classList.add("hidden");
    //or
    //welcome.remove()
    wrapper.classList.remove("hidden");
    key.innerHTML = `KEY: ${e.key}`;
    keyCode.innerHTML = `KEY CODE: ${e.code}`;
    charCode.innerHTML = `CHAR CODE: ${e.which}`;
})

