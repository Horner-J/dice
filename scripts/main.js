const resultDisplay = document.getElementById('result');

document.getElementById('roll').addEventListener('click', diceRoll);

function diceRoll() {
    const diceResult = Math.floor(Math.random() * 6) + 1;
    console.log(diceResult);
    resultDisplay.innerHTML = diceResult;
}