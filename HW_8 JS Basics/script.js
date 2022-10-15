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

"" + 1 + 0 ----поверне 10
"" - 1 + 0 ----поверне -1
true + false ----поверне 1
6 / "3" ----поверне 2
"2" * "3" ----поверне 6
4 + 5 + "px" ----поверне 9px
"$" + 4 + 5 ----поверне $45
"4" - 2 ----поверне 2
"4px" - 2 ----поверне NaN
7 / 0 ----поверне Infinity
"  - 9" + 5 ----поверне -95
"  - 9" - 5 ----поверне NaN
null + 1 ----поверне 1
undefined + 1 ----поверне NaN

*/

//  task 5

/*
let a = 1, b = 1;
let c = ++a;
let d = b++;

alert(a); ----поверне 2
alert(b); ----поверне 2
alert(c); ----поверне 2
alert(d); ----поверне 1

*/

//  task 6

/*
let a = 2;
let x = 1 + (a *= 2);

a ----поверне 4
x ----поверне 5
*/

//  task 7

/*
5 > 4 true
"ананас" > "яблуко" false
"2" > "12" true
undefined == null true
undefined === null true
null == "\n0\n" false
null === +"\n0\n" false
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
    alert(-1);
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
alert( null || 2 || undefined ); --------- 2
*/
//  task 15

/*
alert(alert (1) || 2 || alert(3)); --------- alert (1) потім alert (2)
*/
//  task 16

/*
alert(1 && null && 2); ----------- null
*/
//  task 17

/*
alert(alert(1) && alert(2)); --------- alert (1) потім undedined
*/
//  task 18

/*
alert(null || 2 && 3 || 4 ); --------- 3
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
if (null || -1 && 1) alert('third' ); ----- виконується, бо  -1 && 1  true має більший пріоритете, тому або також true
*/

//  task 22

/*

*/
//  task

/*

*/
//  task

/*

*/
//  task

/*

*/
//  task

/*

*/
//  task

/*

*/
//  task

/*

*/
//  task

/*

*/
//  task

/*

*/
//  task

/*

*/
//  task

/*

*/
//  task

/*

*/

