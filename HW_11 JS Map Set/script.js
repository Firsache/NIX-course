// task 1

/*
function camelize(str) {
    let arr = str.split('-');
    let newArr = [];
    
    for (let elem of arr) {
        if (elem == '') continue;
        let newElem = elem[0].toUpperCase() + elem.slice(1);
        newArr.push(newElem);
    }
    let newStr = newArr.join('');
    return newStr[0].toLowerCase() + newStr.slice(1);
}
alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));

*/
// task 2

/*
function filterRange(arr, a, b) {
    let find = arr.filter(item => (item >= a && item <= b));
    return find;
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert(filtered); // 3,1 (збігаються значення)
alert(arr); // 5,3,8,1 (без змін)
*/
// task 3

/*
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i];
        if (elem < a || elem > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
alert(arr ); // [3, 1]
*/
// task 4

/*
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);

alert( arr ); // 8, 5, 2, 1, -10
*/
// task 5

/*
function copySorted(arr) {
    return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert (sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без змін)
*/

// task 6

/*
наприкінці файлу
*/

// task 7

/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let liubov = { name: "Любов", age: 27 };

let users = [vasya, petya, masha, liubov];
let names = users.map(item => item.name);
alert(names);
*/

// task 8
/*
function sortByAge(users){
    arr.sort((a, b) => a.age - b.age);
}
let vasya = {name : " Вася ", age: 25};
let petya = {name : " Петя ", age: 30};
let masha = {name : " Маша ", age: 28};
let arr = [vasya, petya, masha];

sortByAge(arr);
// тепер : [ vasya , masha , petya ]
alert( arr [0].name); // Вася
alert ( arr [1].name); // Маша
alert ( arr [2].name); // Петро
*/
// task 9

/*
function getAverageAge(users) {
    return users.reduce((previousValue, user) => previousValue + user.age, 0) / users.length;
}

let vasya = { name: "Вася", age: 25};
let petya = { name: "Петя", age: 30};
let masha = { name: "Маша", age: 29};
let arr = [vasya, petya, masha];

alert( getAverageAge(arr) );  // (25 + 30 + 29) / 3 = 28
*/
// task 10

/*
function unique(arr) { 
    let result = [];
    for (let elem of arr) {
        if (!result.includes(elem)) {
            result.push(elem);
        }
    }
    return result;
}
let strings = ["кришна", "кришна", "харе", "харе",
"харе", "харе", "кришна", "крішна", ":-O"];
alert (unique (strings)); // кришна, харе, :-O
*/
// task 11

/*
function unique(arr) { 
    return [... new Set(arr)];
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"];
alert(unique(values)); // Hare,Krishna,:-O
*/
// task 12

/*
function makeCounter() {
    let count = 0;
    return function() {
        return count++;
    };
}
let counter = makeCounter();
let counter2 = makeCounter();
alert (counter ()); // 0
alert (counter ()); // 1
alert (counter2 ()); // покаже знову 0
alert(counter2()); // покаже знову 1
---------------------------------------
count  є локальною змінною функції makeCounter, мы не можемо ззовні її змінити тощо.
коли ми визиваємо функцїю makeCounter створюється нове незалежне лексичне оточення
counter та counter2 прив'язані до різних викликів функції makeCounter
*/

// task 13

/*
function Counter() {
    let count = 0;
    this.up = function() {
    return ++count;
    };
    this.down = function() {
return - count;
    };
}
let counter = new Counter();
alert(counter.up()); //1
alert(counter.up()); //2 ----- this.up та this.down мають одну спільну змінну count та вони належать до одного лексимчного оточення Counter
alert(counter.down() ); //1
*/

// task 14

/*
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

alert( factorial(5) ); // 120
*/

// task 6

num = prompt('Введіть число', "");
/*
Calculator
*/