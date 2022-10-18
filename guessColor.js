'use strict'

// variables
const newGame = document.querySelector('.newgame');
const easy = document.querySelector('.easy');
const hard = document.querySelector('.hard');
const headerSection = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const errorMsg = document.querySelector('.error');
let gameCondition = false;
let counter = 4;
let tryAgain = counter <= 0 ? true : false;



// 1. Generate Random color

let colorsArr = [];
generateRandomColor()
getRandomPickedColor()
boxManipulation()
checkColor()


function generateRandomColor() {
        for (let i = 0; i < boxes.length; i++){
    colorsArr.push(`rgb(${Math.trunc(Math.random() * 255)} , ${Math.trunc(Math.random() * 255)} ,${Math.trunc(Math.random() * 255)})`)
    }
}


function boxManipulation() {
    colorsArr.forEach((color, colIndex) => {
            boxes[colIndex].style.backgroundColor = color;
            boxes[colIndex].setAttribute('data-set', color)
    })
}

function getRandomPickedColor() {
    const randomColor = Math.trunc(Math.random() * colorsArr.length)
    headerSection.textContent = colorsArr[randomColor];
    return randomColor;
}

let pickedColor = getRandomPickedColor();


function checkColor() {

    boxes.forEach((box, ind, boxindex) => {
        
            box.addEventListener('click', function (e) {

            if (e.target.dataset.set === colorsArr[pickedColor]) {
                boxindex.forEach(ele => {
                    ele.style.backgroundColor = colorsArr[pickedColor]
                    errorMsg.textContent = 'correct'
                    errorMsg.style.color = 'blue'

                })
            } else {
                    console.log(counter , tryAgain)
                    // console.log(box)

                    box.classList.add('fade-out');
                    errorMsg.textContent = 'Try again'
                    errorMsg.style.color = 'red'
                    // counter--
                    // return counter--;
                
                
                }
            })
            
        })
}

function resetGame() {
    colorsArr = [];
    generateRandomColor();
    boxes.forEach(box => box.classList.remove('fade-out'))
    boxManipulation();
    checkColor();
    pickedColor = getRandomPickedColor()
}

newGame.addEventListener('click', resetGame)