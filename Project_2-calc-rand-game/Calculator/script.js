let a = "";
let b = "";
let sign = "";
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', 'X', '/'];
//  my screen
const out = document.querySelector('.calc-screen p');
// button ac
function clearAll() {
    a = "";
    b = "";
    sign = "";
    finish = false;
    out.textContent = 0;
}
document.querySelector('.ac').onclick = clearAll;
document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return; // we press on not a button
    if (event.target.classList.contains('ac')) return; // we press on a button ac

    out.textContent = '';
    const key = event.target.textContent; // we get the pressed btn
    // we check whether btn 0-9 or . are pressed 
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
        }        
        else if (a!== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }
    // we check whether btn + - / * are pressed 
    if (action.includes(key)) {
        sign = key;        
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    // we check whether btn = is pressed
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case '+':
                a = ((+a) + (+b)).toFixed(2);
                break;
            case '-':
                a = (a - b).toFixed(2);
                break;
            case 'X':
                a = (a * b).toFixed(2);
                break;
            case '/':
                if (b === '0') {
                    out.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = (a / b).toFixed(2);
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }
}



/*
???????????? ?????????????? 0000 0,,,,,
0,0,0
4,1-0,2
???????? ???????????? , = ?????????????? ?????????? 0,

*/