'use strict'
let realMain = document.querySelector("main");
let main = document.getElementsByClassName("main__container") [0];
let input = document.getElementById("main-input");
let inputRoots = document.getElementById("roots-input");
let submit = document.getElementById("submit");
let submitRoots = document.getElementById("roots-submit");
let randomNumber = document.getElementById("random-num");
let buttonNums = document.getElementById("random-num-checked");
let numsBox = document.getElementsByClassName("numbers-box");
let arrayButtonNums = [];

let power = document.querySelector(".power");
let roots = document.querySelector(".roots");
let powerButton = document.querySelector(".power-button");
let rootsButton = document.querySelector(".root-button");
let rootNum = document.getElementById("root-num");
let slider = document.getElementById("range");
console.log(slider.value);
let sliderNum = document.getElementById("slider-num")
rootNum.innerText = randomNum(slider.value, 2) ** 2;
sliderNum.innerText = slider.value;
console.log(slider.value);
inputRoots.focus();

function updateArray() {
    arrayButtonNums = [];
    for (const elem of numsBox) {
        if (elem.checked) {
            arrayButtonNums.push(+elem.id)
        }
    }
}


function randomNum(max=9, min=2) {
    return Math.round(Math.random() * (max - min) + min);
}; 

function checkedRandomNum(array) {
    if (array.length == 0) {
        return 1;
    } else {
        return array[Math.floor(Math.random() * array.length)];
    }
}

function changeColor(color, duration, elem) {
    const originalBackground = elem.style.backgroundColor;

    elem.style.backgroundColor = color;

    setTimeout(() => {elem.style.backgroundColor = originalBackground}, duration);
}



Array.from(numsBox).forEach(elem => {
    elem.addEventListener('change', updateArray);
});

updateArray();


inputRoots.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();

        if (inputRoots.value == Math.sqrt(rootNum.innerText) ) {
            changeColor('#058B32', 500, realMain);
            rootNum.innerText = randomNum(slider.value, 2) ** 2;
            inputRoots.value = "";
            inputRoots.focus();
        } else {
            changeColor('#e85f5f', 500, realMain);
        }
    }
})

submitRoots.addEventListener("click", function(event) {
    if (inputRoots.value == Math.sqrt(rootNum.innerText) ) {
        changeColor('#058B32', 500, realMain);
        rootNum.innerText = randomNum(slider.value, 2) ** 2;
        inputRoots.value = "";
        inputRoots.focus();
    } else {
        changeColor('#e85f5f', 500, realMain);
        inputRoots.focus()
    }
})

slider.addEventListener("change", function(event) {
    sliderNum.innerText = slider.value;
    console.log(slider.value)
})