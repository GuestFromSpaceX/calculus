'use strict'
let realMain = document.querySelector("main");
let main = document.getElementsByClassName("main__container") [0];
let input = document.getElementById("main-input");
let inputRoots = document.getElementById("roots-input");
input.value = 1;
let submit = document.getElementById("submit");
let submitRoots = document.getElementById("roots-submit");
let randomNumber = document.getElementById("random-num");
let buttonNums = document.getElementById("random-num-checked");
let numsBox = document.getElementsByClassName("numbers-box");
let arrayButtonNums = [];
let lastInputValue = input.value;

let power = document.querySelector(".power");
let roots = document.querySelector(".roots");
let powerButton = document.querySelector(".power-button");
let rootsButton = document.querySelector(".root-button");
let rootNum = document.getElementById("root-num");
let slider = document.getElementById("range");
let sliderNum = document.getElementById("slider-num")
rootNum.innerText = randomNum(slider.value, 2) ** 2;
sliderNum.innerText = slider.value;
console.log(slider.value);
input.focus();

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

buttonNums.innerText = 1;
randomNumber.innerText = 1;

Array.from(numsBox).forEach(elem => {
    elem.addEventListener('change', updateArray);
});

updateArray();


input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        
        if (input.value == lastInputValue) {
            changeColor('#058B32', 500, main);
        } else {
            changeColor('#e85f5f', 500, main);
        }

        randomNumber.innerText = randomNum();
        buttonNums.innerText = checkedRandomNum(arrayButtonNums);
        lastInputValue = randomNumber.innerText * buttonNums.innerText;
        input.value = '';
    }
});


submit.addEventListener("click", function(event) {
    
    event.preventDefault();
    
    if (input.value == lastInputValue) {
        changeColor('#058B32', 500, main);
    } else {
        changeColor('#e85f5f', 500, main);
    }
    
    randomNumber.innerText = randomNum();
    buttonNums.innerText = checkedRandomNum(arrayButtonNums);
    lastInputValue = randomNumber.innerText * buttonNums.innerText;
    input.value = '';
    input.focus();
});

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

powerButton.addEventListener("click", function(event) {
    power.style.display = "flex";
    input.focus();
    roots.style.display = "none";
})

rootsButton.addEventListener("click", function(event) {
    roots.style.display = "flex";
    inputRoots.focus();
    power.style.display = "none";
})

slider.addEventListener("change", function(event) {
    sliderNum.innerText = slider.value;
    console.log(slider.value)
})