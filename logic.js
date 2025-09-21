const display = document.getElementById('display');
const mainDisplay = document.getElementById('display1');
const redInp = document.getElementById('redInp');
const redValue = document.getElementById('redValue');
const greenInp = document.getElementById('greenInp');
const greenValue = document.getElementById('greenValue');
const blueInp = document.getElementById('blueInp');
const blueValue = document.getElementById('blueValue');

const startGame = document.getElementById('startGame');
const timer = document.getElementById('timer');
const correctRed = document.getElementById('redCorrect');
const correctGreen = document.getElementById('greenCorrect');
const correctBlue = document.getElementById('blueCorrect');
var red; var green; var blue;
var timerInterval;
const root = document.documentElement;
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function changeColorOfDisplay() {
    display.style.backgroundColor = `rgb(${redInp.value}, ${greenInp.value}, ${blueInp.value})`;
}
function checkValidValues() {
    if (Math.abs(red - parseInt(redInp.value)) <= 10 & Math.abs(green - parseInt(greenInp.value)) <= 10 & Math.abs(blue - parseInt(blueInp.value) <= 10)) {
        clearInterval(timerInterval);
        correct();
        endGame();
    };
};
function correct() {
    root.style.setProperty('--text-col', '#72ec0eff');
    root.style.setProperty('--wrap-col', '#72ec0eff');
    setTimeout(() => {
        root.style.setProperty('--text-col', '#fff');
        root.style.setProperty('--wrap-col', '#fff');
    }, 500)
};
function wrong() {
    root.style.setProperty('--text-col', '#ec280eff');
    root.style.setProperty('--wrap-col', '#ec280eff');
    setTimeout(() => {
        root.style.setProperty('--text-col', '#fff');
        root.style.setProperty('--wrap-col', '#fff');
    }, 500)
};
function changeInputsDisable(flag) {
    redInp.disabled = flag;
    greenInp.disabled = flag;
    blueInp.disabled = flag;
};
function start() {
    display.style.backgroundColor = 'black';
    startGame.disabled = true;
    changeInputsDisable(false);
    redValue.textContent = 0; greenValue.textContent = 0; blueValue.textContent = 0;
    redInp.value = 0; greenInp.value = 0; blueInp.value = 0;
    red = random(0, 255); green = random(0, 255); blue = random(0, 255);
    console.log(red,green,blue);
    mainDisplay.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    setTimer();
};
function showCorrectColors() {
    correctRed.textContent = `Red: ${red}`;
    correctGreen.textContent = `Green: ${green}`;
    correctBlue.textContent = `Blue: ${blue}`;
};
function setTimer() {
    let time = 4;
    timer.textContent = '5';
    timerInterval = setInterval(() => {
        timer.textContent = String(time).padStart(2, '0');
        time--;
        if (time === -1) {
            clearInterval(timerInterval);
            endGame();
            wrong();
            startGame.disabled = false;
        };
    }, 1000);
};
function endGame() {
    startGame.disabled = false;
    changeInputsDisable(true);
    showCorrectColors();
    console.log('Ended!');
};
redInp.addEventListener('input', () => {
    redValue.textContent = redInp.value;
    changeColorOfDisplay();
    checkValidValues();
});
greenInp.addEventListener('input', () => {
    greenValue.textContent = greenInp.value;
    changeColorOfDisplay();
    checkValidValues();
});
blueInp.addEventListener('input', () => {
    blueValue.textContent = blueInp.value;
    changeColorOfDisplay()
    checkValidValues();
});
startGame.addEventListener('click', () => {
    start();
});
changeInputsDisable(true);