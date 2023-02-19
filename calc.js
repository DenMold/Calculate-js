const out = document.querySelector('.calc-scrin p');

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
    out.textContent = 0;
}

document.querySelector('.clears').onclick = clearAll;
document.querySelector('.buttons').onclick = (e) => { 
    if(!e.target.classList.contains('btn')) return;
    if(e.target.classList.contains('clears')) return; 
    //думаю можно будет стиреть

    out.textContent = "";

    const key = e.target.textContent;
    // если нажаты 0-9 или .
    if(num.includes(key)){
        if(b == "" && singOperation == ""){
        a += key;
        
        out.textContent = a;
        } else if (a != '' && singOperation != '' && finish){
            b = key;
            finish = false;
            out.textContent = b;

        }   else {
            b += key;
            out.textContent = b;
        }
       
    }

    // если нажаты знаки +-*/
    if(opiration.includes(key)){
        singOperation = key;
        out.textContent = singOperation;
        console.log(a, b, singOperation);
        return
    }

    // нажата равно 
    if(key == '='){
        if(b == ''){
            b = a
        }
        switch(singOperation){
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = (+a) - (+b);
                break;
            case 'x':
                a = (+a) * (+b);
                break;
            case '/':
                a = (+a) / (+b);
                break;
        }
        finish = true;
        out.textContent = a;
    }
}
