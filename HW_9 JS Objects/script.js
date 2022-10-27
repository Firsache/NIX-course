// task 1

/*
let i = 3;
while (i) {
    alert(i--); ------- виведе 3, 2, 1 і зупиниться, через те, умова while не виконується при 0 = false
}
*/

// task 2

/*
let a, b, c;

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
let a, b, c;

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
let a, b, c;
let length1, length2;
let close_length, close_point;
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
let x, y;
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
let x, y;
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
let x1, y1, x2, y2, x3, y3, x4, y4;

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
let max = Math.max(a, b, c);
let min = Math.min(a, b, c);
let difference = max - min;
alert(difference);

variant 2
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

variant 3
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
let a = prompt('Введіть число', 0);
if ((Number(a) % 2 == 0) && (Number(a) !== 0)) {
    alert('це парне число')
} else if (Number(a) == 0) {
    alert('це нульове число')
} else {
    alert('це непарне число')
}
*/
// task 21

/*
variant 1
let num;
let test = String(num);
let amount = test.length;
let sum = Number(test[0]);
if (amount == 2) {
    sum = Number(test[0]) + Number(test[1]);
}
alert(amount);
alert(sum);

variant 2
function digitSum(num) {
    let sum = 0, x = String(num);     
    let amount = x.length;
    alert(amount);
    for (let i = 0; i < x.length; i++) {
        sum += Number(x[i]);
    }
    alert(sum);
    return(sum);
}
*/
// task 22
/*
let convertInches = confirm('Вам потрібно перевести дюйми у сантиметри?');
let concertSentimeters;
let a, b, c, d;
if (convertInches == true) {
    a = +prompt('Введіть число в дюймах, яке потрібно перевести у сантиметри', "");
    b = a * 2.54;
    alert(`${a} дюймів дорівнює ${b} сантиметрів`);
} else if (convertInches == false) {
    concertSentimeters = confirm('Вам потрібно перевести сантиметри у дюйми?');
    if (concertSentimeters == true) {
        c = +prompt('Введіть число в сантиметрах, яке потрібно перевести у дюйми', "");
        d = c / 2.54;
        alert(`${c} сантиметрів дорівнює ${d} дюймів`);
    } else {
        alert('На жаль ця программа працює тільки з сантиметрами та дюймами');
    }
}
*/
// task 23
/*

*/
// task 24

/*
let a = prompt('Введіть тризначне число', "");
let sum;
let multiply;
let b = Number(a);
if (b % 2 == 0) {    
    sum = Number(a[0]) + Number(a[1]) + Number(a[2]);
    alert(Number(sum));
} else {    
    multiply = Number(a[0]) * Number(a[1]) * Number(a[2]);
    alert(Number(multiply));
}
*/

// task 25

/*
let a = +prompt('Введіть число для першої сторони трикутника', "");
let b = +prompt('Введіть число для другої сторони трикутника', "");
let c = +prompt('Введіть число для третьої сторони трикутника', "");
if ((a + b) < c || (c + b) < a || (a + c) < b) {
    alert('трикутрик не може існувати при таких довжинах');
} else {
    alert('Вітаю, ви створили справжній трикутник');
}
*/

// task 26

/*
let x = 4;
let y = 9;
let r = 10;
let a = Math.sqrt(x**2 + y**2);
if (a <= r ) {
    alert("Точка знаходиться в площині кола");
} else {
    alert("Точка не знаходиться в площині кола");
}
*/

// task 27

/*
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
*/

// task 28

/*
const user = {
name: "John"
};
user.name = "Pete"; ----- властивості об'єкта, оголошеного через const змінити можна, але переневизначити user, оголошений через const не можна
*/

// task 29

/*
let salaries = {
John: 100,
Ann: 160,
Pete: 130
}
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
alert(sum);
*/

// task 30

/*
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    };           
}
*/

// task 23
/*
let start = confirm('Press to start a game"How to become a millionaire"!');
let questionOne, questionTwo, questionThree, questionFour, questionFive;
let getOneThousand, getThreeThousand, getFiveThousand, getOneMillion;
if (start == 0) {
    alert('Maybe you will play next time!');
}
else {
    questionOne = prompt('Question 1: The closest planet to the Earth is... a) Mars b) Jupiter c) Mercury d) Neptune', "");    
    if (questionOne === null || questionOne.toLowerCase() != 'c') {
        alert('Ooops, You Lose..');
    }
    else {
        alert('Well Done! You got $500!');
        getOneThousand = confirm('Press OK to see next question and get $1,000! To save $500 press Cancel');
        if (getOneThousand == 0) {
            alert('Congratulations! You won $500!');
        }
        else {
            questionTwo = prompt('Question 2: It is physically impossible for which animal to look up into the sky? a) Dogs b) Pigs c) Tigers d) Elephants', "");
            if (questionTwo === null || questionTwo.toLowerCase() != 'b') {
                alert('Ooops, You Lost $500..');
            }
            else {
                alert('Well Done! You got $1,000!');
                getThreeThousand = confirm('Press OK to see next question and get $3,000! To save $1,000 press Cancel');
                if (getThreeThousand == 0) {
                    alert('Congratulations! You won $1,000!');
                }
                else {
                    questionThree = prompt('Question 3: Which animal has not only striped fur, but also striped skin? a) Tigers b) Zebras c) Cats d) Hyena', "");
                    if (questionThree === null || questionThree.toLowerCase() != 'a') {
                        alert('Ooops, You Lost $1,000..');
                    }
                    else {
                        alert('Well Done! You got $3,000!');
                        getFiveThousand = confirm('Press OK to see next question and get $5,000!To save $3,000 press Cancel');
                        if (getFiveThousand == 0) {
                            alert('Congratulations! You won $3,000!');
                        } else {
                            questionFour = prompt('Question 4: What is Sodium Chloride? a) Oxygen b) Salt c) Chlorine d) Sodium bicarbonate', "");
                            if (questionFour === null || questionFour.toLowerCase() != 'b') {
                                alert('Ooops, You Lost $3,000..');
                            }
                            else {
                                alert('Well Done! You got $5,000!');
                                getOneMillion = confirm('Press OK to see next question and get $1,000,000! To save $5,000 press Cancel');
                                if (getOneMillion == 0) {
                                    alert('Congratulations! You won $5,000!');
                                }
                                else {
                                    questionFive = prompt('Question 5: Because of what protein blood looks red? a) Albumin b) Globulin c) Enzymes d) Hemoglobin', "");
                                    if (questionFive === null || questionFive.toLowerCase() != 'd') {
                                        alert('Ooops, You Lost $5,000..');
                                    }
                                    else {
                                        alert('Well Done! You got $1,000,000!');
                                        alert('Congratulations! You won $1,000,000 in a game "How to become a millionaire"!!!');
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
*/
