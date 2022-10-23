// task 1

/*
variant 1
function isEmpty(obj) {
    if (obj === undefined) {
        return true;
    } else {
        return false;
    }
}
variant 2
function isEmpty(obj) {
    for (let key in obj) {
    return false;
    }
    return true;
}
*/

// task 2

/*
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
*/

// task 3

/*
function readNumber() {
    let num;
    do {
        num = prompt('Введіть число', "");
    } while (!isFinite(num));
    if (num == 'null' || num == "") return null;
    return Number(num);
}
alert(readNumber());
*/

// task 4

/*
function random(min, max) {
    return Math.random() * (max - min) + min;
}
*/

// task 5

/*
function randomInteger(min, max) {
    let randNum = Math.random() * (max + 1 - min) + min;
    return Math.floor(randNum);
}
*/

// task 6

/*
function ucFirst(str) {
    if (!str) return str;
    let newStr = str[0].toUpperCase();
    return newStr + str.slice(1);
}
console.log (ucFirst("вася"));
*/

// task 7

/*
variant 1
function checkSpam(str) {
    let newStr = str.toLowerCase();
    if (newStr.includes('viagra') || newStr.includes('xxx')) return true;
    else { return false; }
}
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );

variant 2
function checkSpam(str) {
    let newStr = str.toLowerCase();
    return newStr.includes('viagra') || newStr.includes('xxx');
}
*/
// task 8

/*
function truncate(str, maxlength) {
    let newStr;
    if (str.length > maxlength) {
        newStr = str.slice(0, maxlength - 1);
        // alert(newStr.length);
        return newStr + '...';
    } return str;
}
alert(truncate("Ось що мені хотілося б сказати на цю тему:", 20));
alert(truncate("Усім привіт!", 20));
*/

// task 9

/*
function extractCurrencyValue(str) {
    return Number(str.slice(1));
}
alert(extractCurrencyValue('$120'));
*/

// task 10

/*
function sumInput() {
    let array = [];
    while (true) {
        let num = prompt("Введіть числове значення", "");
        if (num === null || num === "" || !isFinite(num)) break;
        array.push(+num);
    }
    let sum = 0;
    for (let key of array) {
        sum += key;   
    }   
    
    return sum;
}
alert(sumInput());

----------------------я пробовала так сначала, но не выходило-------------------
function sumInput() {
    let array = [];    
    let num;
    do {
        num = prompt("Введіть числове значення", "");
        if (num === null || num === "") break;        
    } while (!isFinite(num));
    
    array.push(+num);
    
    let sum = 0;
    for (let key of array) {
        sum += key;   
    }
    return sum;
}
alert(sumInput());
*/

// task 11

/*
function checkAge (age) {
if (age > 18) {
return true;
} else {
// ...
return confirm( ' Батьки дозволили ?');
}
}


function checkAge (age) {
if (age > 18) {
return true;
}
// ...
return confirm( ' Батьки дозволили ?');
}
------------------ обидва варінти працюют однаково, ніяких відмінностей немає.
else зайвий, цого можна прибрати для оптимізації кода. якщо не виконається умова, 
то ми не побачимо перший return. функція автоматично буде читати далі код, то поверне другий return
*/

// task 12

/*
function checkAge (age) {
    return (age > 18) ? true : confirm(' Батьки дозволили ?');
}
function checkAge (age) {
    return (age > 18) || confirm(' Батьки дозволили ?');
}
*/

// task 13

/*
function min(a, b) {
    return (a > b) ? b : a;
}
*/

// task 14

/*
variant 1
let x= prompt("Введіть число, яке потрібно помножити на ступіть", "");
let n = prompt("Введіть ступінь", "");
if (n < 1) {
    alert(`Ви маєте ввести лише натуральне число`);
} else {
    alert(pow(x, n));
}
function pow(x, n) {
    let res = x;
    for (let i = 1; i < n; i++) {
        res *= x;
    }
    return res;
}

variant 2
let x= prompt("Введіть число, яке потрібно помножити на ступіть", "");
let n = prompt("Введіть ступінь", "");
if (n < 1) {
    alert(`Ви маєте ввести лише натуральне число`);
} else {
    alert(pow(x, n));
}
function pow(x, n) {
    return Math.pow(x, n);
}
*/

// task 15

/*
function ask(question, yes, no) {
if (confirm(question)) yes( )
else no( );
}
ask(
    "Ви згодні?",
    () => alert("Ви погодилися.");
    () => alert("Ви скасували виконання.");
);
*/

// task 16

/*
*/

// task 17

/*
*/