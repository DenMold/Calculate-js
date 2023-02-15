const out = document.querySelector('.number');

let a = ""; //первое число
let b = "";//второе число
let singOperation = ""; //знак операции
let finish = false;

const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const opiration = ['/', 'x', '+', '-'];

function clearAll(){
    a = ""; //первое число
    b = "";//второе число
    singOperation = ""; //знак операции
    finish = false;
}

document.querySelector('.clears').onclick = clearAll;
document.querySelector('.buttons').onclick = (e) => { 
    if(!e.target.classList.contains('btn')) return;
    if(!e.target.classList.contains('clears')) return; //думаю можно будет стиреть
}
