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
*/

// task 11

/*
*/

// task 12

/*
*/

// task 13

/*
*/

// task 14

/*
*/

// task 15

/*
*/

// task 16

/*
*/

// task 17

/*
*/