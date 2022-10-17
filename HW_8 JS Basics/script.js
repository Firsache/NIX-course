// task 1

/*
let admin;
let name = 'Liubov';
admin = name;
alert(admin);
*/

// task 2

/*
const BIRTHDAY = '18.04.1982';
const AGE = someCode(BIRTHDAY);

для даних оголошень const можна та подрібно використовувати uppercase як псевдонім,
через те, що const не можна перевизначити, а задля зручности,
щоб швидше знайти функції тощо з цими const їх записують саме у верхньому регістрі напочатку кодування у файлі JS
*/

//  task 3

/*
let name = 'Ilya';

alert(`hello ${1}`); ------ hello 1 -------- бо немає змінної 1 (та неможна у назві змінної застосувати лише номер). функція alert сприймає 1, як номер у рядку ``
alert(`hello ${"name"}`);  ------ hello name -------- бо змінну name обернули у"" та функція alert сприймає її, як просто текст
alert(`hello ${name}`); hello Ilya -------- бо функція alert звернулась до змінної name, у якої оголошено Ilya
*/

//  task 4

/*

"" + 1 + 0 ----поверне 10 ----спочатку рядок, при суммі усі інші сприймаються як рядки
"" - 1 + 0 ----поверне -1 ----  через - воно не сприймається як рядок
true + false ----поверне 1 ----бо true = 1, а false = 0
6 / "3" ----поверне 2 ----рядок приведено до номера
"2" * "3" ----поверне 6  ----рядки приведено до номерів
4 + 5 + "px" ----поверне 9px ----спочатку сумма номерів, а потім вони спрймається як рядок та додаються до рядка "px"
"$" + 4 + 5 ----поверне $45 ----спочатку рядок, при суммі усі інші сприймаються як рядки
"4" - 2 ----поверне 2 ---- рядок приведено до номера
"4px" - 2 ----поверне NaN ----не зміг привести рядок до номера
7 / 0 ----поверне Infinity
"  - 9" + 5 ----поверне -95 ----спочатку рядок, при суммі усі інші сприймаються як рядки
"  - 9" - 5 ----поверне NaN ----не зміг привести рядок до номера
null + 1 ----поверне 1 ----null = 0
undefined + 1 ----поверне NaN ----undefined = NaN

*/

//  task 5

/*
let a = 1, b = 1;
let c = ++a;
let d = b++;

alert(a); ----поверне 2 збільшили на один
alert(b); ----поверне 2 збільшили на один
alert(c); ----поверне 2 превіксна форма вертає нове значенно
alert(d); ----поверне 1 постфіксна форма вертає старе значення

*/

//  task 6

/*
let a = 2;
let x = 1 + (a *= 2);

a ----поверне 4 -- пріоритетр 1 - дужки
x ----поверне 5
*/

//  task 7

/*
5 > 4 true
"ананас" > "яблуко" false символ а менше ніж я
"2" > "12" true перший символ 2 більше ніж перший символ 1
undefined == null true не суворе порівняння без приведення типів
undefined === false суворе порівняння з приведенням типів
null == "\n0\n" false при не суворому порівняння null тільки рівен undefined
null === +"\n0\n" false суворе порівняння з приведенням типів
*/

//  task 8

/*
let userName = prompt('Введіть Ваше імя');

alert(`Ваше імя ${userName}`);
*/

//  task 9

/*
if ("0") {
alert(' Привіт');
} ----------- так, ми побачимо alert, бо рядок "0" не порожній. це виводить true,отже умова if виконується
*/

//  task 10

/*
let answer = prompt('Яка «офіційна» назва JavaScript?');
if (answer === "ECMAScript") {
    alert("Правильно!");
} else {
    alert("Не знаєте? ECMAScript!");
}
*/

//  task 11

/*
let answer = prompt('Введіть число від -5 до 5');
if (answer > 0) {
    alert("1");
} else if (answer == 0) {
    alert(0);
} else {
    alert("-1");
}
*/
//  task 12

/*
let result = (a + b < 4) ? ' Мало ' : 'Багато';
*/

//  task 13

/*
let message = (login == ' Співробітник' ? ' Привіт ' :
    login == 'Директор' ? ' Добрий день! ' :
    login == '' ? 'Відсутній логін' :
'';
)

*/

//  task 14

/*
alert( null || 2 || undefined ); --------- 2 ---- при || перерівка зупиниться на першому true
*/
//  task 15

/*
alert(alert (1) || 2 || alert(3)); --------- 1 потім 2 ---- при || перерівка зупиниться на першому true
*/
//  task 16

/*
alert(1 && null && 2); ----------- null ---- при && перерівка зупиниться на першому false
*/
//  task 17

/*
alert(alert(1) && alert(2)); --------- alert (1) потім undefined. бо при перевірці зліва від &&, alert видаст undefined. тому далі перевірка не піде
*/
//  task 18

/*
alert(null || 2 && 3 || 4 ); --------- 3  - пріоритет 1 - &&, там перерівка зупиниться на останньому true. пріоритет 2 - ||, там перерівка зупиниться на першому true
*/
//  task 19

/*
let age;
if (age >= 14 && age <= 90) {
    alert("це не дитина");
} else {
    alert("це дитина або дуже похила людина");
}
*/
//  task 20

/*
if (!(age >= 14 && age <= 90)){
    alert("truthy!");
} else {
    alert("falsy!");
}

let age;
if (age < 14 && age > 90) {
    alert("truthy!");
} else {
    alert("falsy!");
}

*/

//  task 21

/*
if (-1 || 0) alert( 'first'); ----- виконується, бо -1 це true
if (-1 && 0) alert( 'second' ); ----- не виконується, бо 0 це false
if (null || -1 && 1) alert('third' ); ----- виконується, бо  -1 && 1  true має більший пріоритете, тому або - також true
*/

//  task 22

/*
let login = prompt('Введіть логін');
let password;
if (login == null || login == "") {
    alert("Скасовано");
} else if (login == 'Адмін') {
    password = prompt('Введіть пароль');
    if (password == 'я головний') {
        alert("Здрастуйте!");
    } else if (password == null || password == "") {
        alert("Скасовано");
    } else {
        alert("Невірний пароль");
    }
} else {
    alert("Я вас не знаю");
}
*/
//  task 23

/*
let browser;
if (browser == 'Edge') {
    alert(" You've got the Edge! ");
} else if (browser == 'Chrome' ||
    browser == 'Safari' ||
    browser == 'Firefox' ||
    browser == 'Opera') {
    alert( ' Okay we support these browsers too' );
} else {
    alert( ' We hope that this page looks ok!' );
}
*/
//  task 24

/*
let a = +prompt('a?', '');
switch (a) {
    case "0":
        alert(0);
        break;
    case "1":
        alert(1);
        break;
    case "2":
    case "3":
        alert('2,3');
        break;
}
*/
//  task 25

/*
let number = prompt("Введіть число", "");

if (number > 0) {
    number++;
    alert(number);
} else {
    alert(number);
}
*/
//  task 26

/*
let number = prompt("Введіть число", "");
if (number > 0) {
    number++;
    alert(number);
} else {
    number = number - 2;
    alert(number);
}
*/
//  task 27

/*
let number = prompt("Введіть число", "");
if (number > 0) {
    number++;
    alert(number);
} else if (number < 0) {
    number = number - 2;
    alert(number);
} else {
    number = 10;
    alert(number);
}
*/
//  task 28

/*
let numOne;
let numTwo;
let numTree;
let amount;
if (numOne > 0) {
    amount = amount + 1;
}
if (numTwo > 0) {
    amount = amount + 1;
}
if (numTree > 0) {
    amount = amount + 1;
    alert(amount);
}
*/
//  task 29

/*
let numOne;
let numTwo;
let numTree;
let amountPositive = 0;
let amountNegative = 0;
if (numOne > 0) {
    amountPositive = amountPositive + 1;
} else if (numOne < 0){
    amountNegative = amountNegative + 1;
}
if (numTwo > 0) {
    amountPositive = amountPositive + 1;
} else if (numTwo < 0){
    amountNegative = amountNegative + 1;
}
if (numTree > 0) {
    amountPositive = amountPositive + 1;
} else if (numTree < 0){
    amountNegative = amountNegative + 1;
}
alert(amountPositive);
alert(amountNegative);
*/
//  task 30

/*
let numOne;
let numTwo;
let max = numOne
if (numOne < numTwo) {
    max = numTwo;
} else if (numOne == numTwo){
    alert("Числа рівні");
}
alert(max);

*/
//  task 31

/*
let numOne;
let numTwo;
let min = numTwo;
if (numOne < numTwo) {
    min = numOne;
} else if (numOne == numTwo){
    alert("Числа рівні");
}
alert(min);

*/
//  task 32

/*
let numOne;
let numTwo;
if (numOne < numTwo) {
    alert(numTwo);
    alert(numOne);
} else if (numOne == numTwo){
    alert("Числа рівні");
} else {
    alert(numOne);
    alert(numTwo);
}
*/
//  task 33

/*
let a;
let b;
let c;
if (a > b) {
    c = a;
    a = b;
    b = c;
}
alert(a);
alert(b);
*/
//  task 34

/*
let a;
let b;
let sum = a + b;
if (a == b) {
    a = 0;
    b = 0;
} else {
    a = sum;
    b = sum;
}
alert(a);
alert(b);
*/
//  task 35

/*
variant 1
let a;
let b;
let c = a + b;
if (a == b) {
    a = 0;
    b = 0;
} else {
    a = c;
    b = c;
}
alert(a);
alert(b);

variant 2
let a;
let b;
if (a == b) {
    a = 0;
    b = 0;
} else {
    a = a + 1;
    b = b + 1;
}
alert(a);
alert(b);
*/
//  task 36

/*
let a;
let b;
let c;
let min = a;
if ( b < a && b < c) {
    min = b;
}
if ( c < a && c < b) {
    min = c;
}

alert(min);
*/
//  task 37

/*
let a;
let b;
let c;
let middle = a;
if (c > b && c < a) {
    middle = c;
}
if (c > a && c < b) {
    middle = c;
}
if (b > c && b < a) {
    middle = b;
}
if (b > a && b < c) {
    middle = b;
}
alert(middle);
*/
//  task 38

/*
let a;
let b;
let c;
let min = a;
let max = c;
if (a > b && a > c && b < c) {
    min = b;
    max = a;
}
if (a > c && a > b && c < b) {
    min = c;
    max = a;
}
if (b > c && b > a && c < a) {
    min = c;
    max = b;
}
if (b > c && b > a && a < c) {
    min = a;
    max = b;
}
if (c > b && c > a && b < a) {
    min = b;
    max = c;
}

alert(min);
alert(max);
*/
//  task 39

/*
let a;
let b;
let c;
let sum = c + b;
if ( b < a && b < c) {
    sum = a + c;
}
if ( c < a && c < b) {
    sum = a + b;
}

alert(sum);

*/
//  task 40

/*
let a;
let b;
let c;
let different = a;
if ( a == c) {
    different = b;
}
if (a == b) {
    different = c;
}

alert(different);
*/


