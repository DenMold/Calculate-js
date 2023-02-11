const input = document.getElementById("input");
const number = document.querySelectorAll(".number div");
const operator = document.querySelectorAll("#operator");
const result = document.getElementById("result");
const clears = document.getElementById("clears");
const resultDisplayed = false;


const onNumbers = function (e){
    let currentString = input.innerHTML;
    let lastChar = currentString[currentString.length - 1];
    if (resultDisplayed == false){
        input.innerHTML += e.target.InnerHTML;
        
    }
}



for(let i = 0; i < number.length; i++){
    number[i] = addEventListener('click', "onNambers()")
}