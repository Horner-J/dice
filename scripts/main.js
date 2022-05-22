const resultDisplay = document.getElementById('result');

document.getElementById('roll').addEventListener('click', diceRoll);

function diceRoll() {
    let diceResult = Math.floor(Math.random() * 6) + 1;

    if (diceResult === 1) {
        resultDisplay.innerHTML = "<img src='../images/dice-1.png'>";
    } 
    if (diceResult === 2) {
        resultDisplay.innerHTML = "<img src='../images/dice-2.png'>";
    } 
    if (diceResult === 3) {
        resultDisplay.innerHTML = "<img src='../images/dice-3.png'>";
    } 
    if (diceResult === 4) {
        resultDisplay.innerHTML = "<img src='../images/dice-4.png'>";
    } 
    if (diceResult === 5) {
        resultDisplay.innerHTML = "<img src='../images/dice-5.png'>";
    } 
    if (diceResult === 6) {
        resultDisplay.innerHTML = "<img src='../images/dice-6.png'>";
    } 

    console.log(diceResult);
    // resultDisplay.innerHTML = diceResult;
}