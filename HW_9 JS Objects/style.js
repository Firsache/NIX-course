// task 1

/*
let i = 3;
while (i) {
    alert(i--); ------- виведе 3, 2, 1 і зупиниться, через те, умова while не виконується при 0 = false
}
*/

// task 2

/*
let a;
let b;
let c;
if (a < b && b < c) {
    a = a ** 2;
    b = b ** 2;
    c = c ** 2;
} else {
    a = -a;
    b = -b;
    c = -c;
}
alert(a);
alert(b);
alert(c);
*/
// task 3

/*
let a;
let b;
let c;
if (a < b && b < c) {
    a = a ** 2;
    b = b ** 2;
    c = c ** 2;
} else if (a > b && b > c) {
    a = a ** 2;
    b = b ** 2;
    c = c ** 2;
}
else {
    a = -a;
    b = -b;
    c = -c;
}
alert(a);
alert(b);
alert(c);
*/
// task 4

/*
let a;
let b;
let c;
let length1;
let length2;
let close_length;
let close_point;
if (a > c && a < b) {
    length1 = a - c; 
    length2 = b - a;
    if (length1 > length2){
    close_length = length2;
    close_point = b;
    } else {
    close_length = length1;
    close_point = c;
    }
}
if (b > a && b < c) {
    close_length = b - a;
    close_point = b;
}
if (c > b && c < a) {
    close_length = a - c;
    close_point = c;
)
alert(close_length);
alert(close_point);
*/
// task 5

/*
let x;
let y;
if (x == 0 && y == 0) {
    alert(0);
}
if (x == 0 && y !== 0) {
    alert(1);
}
if (x !== 0 && y == 0) {
    alert(2);
}
if (x !== 0 && y !== 0){
    alert(3);
}
*/

// task 6

/*
let x;
let y;
let quarter = 1;
if (x < 0 && y > 0) {
    quarter = 2;
}
if (x < 0 && y < 0) {
    quarter = 3;
}
if (x > 0 && y < 0) {
    quarter = 4;
}
alert(quarter);
*/

// task 7

/*
let x1;
let y1;
let x2;
let y2;
let x3;
let y3;
let x4;
let y4;

if (x1 == x2) {
    x4 == x3;
}
if (x1 !== x2) {
    x4 == x1;
}
if (y1 == y2) {
    y4 == y3;
}
if (y1 !== y2) {
    y4 == y1;
}
alert(x4);
alert(x5);
*/
// task 8

/*
let year;
let amount_days;
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    amount_days = 366;
    alert('цей рік є високосний');
} else {
    alert('цей рік не є високосний');
    amount_days = 365;
}
alert(amount_days);
*/
// task 9

/*
let num;
if (num < 0 && num % 2 != 0) {
    alert('це негативне непарне число');
}
if (num < 0 && num % 2 == 0) {
    alert('це негативне парне число');
}
if (num > 0 && num % 2 != 0) {
    alert('це позитивне непарне число');
}
if (num > 0 && num % 2 == 0) {
    alert('це позитивне парне число');
}
if (num == 0) {
    alert('це нульове число');
}
*/
// task 10

/*
let num;
if (num < 10 && num % 2 != 0) {
    alert('це непарне однозначне число');
}
if (num < 10 && num % 2 == 0) {
    alert('це парне однозначне число');
}
if (num >= 10 && num <= 99 && num % 2 != 0) {
    alert('це непарне двозначне число');
}
if (num >= 10 && num <= 99 && num % 2 == 0) {
    alert('це парне двозначне число');
}
if (num < 10 && num % 2 == 0) {
    alert('це парне однозначне число');
}
if (num >= 100 && num <= 999 && num % 2 != 0) {
    alert('це непарне трьозначне число');
}
if (num >= 100 && num <= 999 && num % 2 == 0) {
    alert('це парне трьозначне число');
}
*/
// task 11

/*
let i = 0;
while (++i < 5) alert(i); ---------- виведе 1 2 3 4, префіксник варіант спочатку збільшує i, а потім порівнює. коли i = 5 умова є falsy, цикл зупиняється
let i = 0;
while (i++ < 5) alert(i); ---------- виведе 1 2 3 4 5, постфіксник варіант збільшує i, але вертає старе значення. тому while спочатку порівнює, а потім збільшує i. останне i = 5 виведеться, а вже умова 5 < 5 буде falsy, цикл зупинється
*/
// task 12

/*
for (let i = 0; i < 5; i++) alert(i);
for (let i = 0; i < 5; ++i) alert(i);---------- в обох випадках виведе 0 1 2 3 4, цикл for спочатку перевіряє умову, а потім вже збільшує, коли i = 5 умова є falsy, цикл for зупиняється
*/
// task 13

/*
variant 1
for (let i = 2; i <= 10; i++) {
    if (i % 2 != 0) {
        continue;
    } else {
        alert(i);
    }    
}
variant 2
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert(i);
    }
}
*/
// task 14

/*
let i = 0;
while (i < 3){
    alert(`number ${i}!`);
    i++;
}
*/

// task 15

/*
let num;
do {
    num = prompt('Введіть число більше 100', "");
} while (num <= 100 && num != null);
*/
// task 16

/*
let n;
Integer:
for (i = 2; i <= n; i++) {
    for (let num = 2; num < i; num++) {
        if (i % num == 0) continue Integer;
    }
    alert(i);
}
*/
// task 17

/*
variant 1
let a = +prompt('Введіть число', 0);
let b = +prompt('Введіть число', 0);
let sum = a + b;
let average = sum / 2;
alert(average);

variant 2
let a = prompt('Введіть число', 0);
let b = prompt('Введіть число', 0);
let sum = Number(a) + Number(b);
let average = sum / 2;
alert(average);
*/

// task 18

/*
let a = prompt('Введіть число', 0);
let square = Number(a)**2;
alert(square);
*/
// task 19

/*
variant 1
let a = +prompt('Введіть перше число', 0);
let b = +prompt('Введіть друге число', 0);
let c = +prompt('Введіть трете число', 0);
let max = a;
let min = b;

if ((c < b) && (c < a)) {
    min = c;
}
if ((a < b) && (a < c)) {
    min = a;
}
if ((b > a) && (b > c)) {
    max = b;
}
if ((c > b) && (c > a)){
    max = c;
}
let difference = max - min;
alert(difference);

variant 2
let a = prompt('Введіть перше число', 0);
let b = prompt('Введіть друге число', 0);
let c = prompt('Введіть трете число', 0);
let max = Number(a);
let min = Number(b);

if ((Number(c) < Number(b)) && (Number(c) < Number(a))) {
    min = Number(c);
}
if ((Number(a) < Number(b)) && (Number(a) < Number(c))) {
    min = Number(a);
}
if ((Number(b) > Number(a)) && (Number(b) > Number(c))) {
    max = Number(b);
}
if ((Number(c) > Number(b)) && (Number(c) > Number(a))){
    max = Number(c);
}
let difference = max - min;
alert(difference);
*/
// task 20
/*

*/
// task
/*

*/
// task
/*

*/
// task
/*

*/
// task
/*

*/
// task
/*

*/
// task
/*

*/
// task
/*

*/
// task
/*

*/