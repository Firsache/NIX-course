const btn = document.querySelector('button');
const output = document.querySelector('#output');
const minValue = document.querySelector('.num-one');
const maxValue = document.querySelector('.num-two');
const time = document.querySelector('.time');
const resultBox = document.querySelector('.result-box');

function getRandomNumber(min, max) {
    min = Number(document.getElementById('min').value);
    max = Number(document.getElementById('max').value);
    
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}


btn.addEventListener('click', () => {
    resultBox.style.display = 'block';
    output.innerText = getRandomNumber();
    minValue.innerHTML = Number(document.getElementById('min').value);
    maxValue.innerHTML = Number(document.getElementById('max').value);
    time.innerText = new Date();
})