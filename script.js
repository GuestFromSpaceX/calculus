'use strict'
let main = document.getElementsByClassName("main__container") [0];
let input = document.getElementById("main-input");
input.value = 1;
let randomNumber = document.getElementById("random-num");
let buttonNums = document.getElementById("random-num-checked");
let numsBox = document.getElementsByClassName("numbers-box");
let arrayButtonNums = [];
let lastInputValue = input.value;

input.focus();
console.log(numsBox[0].id);

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

function changeColor(color, duration) {
    const originalBackground = main.style.backgroundColor;

    main.style.backgroundColor = color;

    setTimeout(() => {main.style.backgroundColor = originalBackground}, duration);
}

buttonNums.innerText = 1;
randomNumber.innerText = 1;

Array.from(numsBox).forEach(elem => {
    elem.addEventListener('change', updateArray);
});

updateArray();

console.log(input.value)

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        
        if (input.value == lastInputValue) {
            console.log('+');
            changeColor('#058B32', 500);
        } else {
            console.log('-');
            changeColor('#e85f5f', 500);
        }

        randomNumber.innerText = randomNum();
        buttonNums.innerText = checkedRandomNum(arrayButtonNums);
        lastInputValue = randomNumber.innerText * buttonNums.innerText;
    }
});