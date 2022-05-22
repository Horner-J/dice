const resultDisplay = document.getElementById('result');

document.getElementById('roll').addEventListener('click', diceRoll);

function diceRoll() {
    let diceResult = Math.floor(Math.random() * 6) + 1;

    if (diceResult === 1) {
        resultDisplay.innerHTML = "<img src='scripts/images/dice-1.jpg'>";
    } 
    if (diceResult === 2) {
        resultDisplay.innerHTML = "<img src='scripts/images/dice-2.jpg'>";
    } 
    if (diceResult === 3) {
        resultDisplay.innerHTML = "<img src='scripts/images/dice-3.jpg'>";
    } 
    if (diceResult === 4) {
        resultDisplay.innerHTML = "<img src='scripts/images/dice-4.jpg'>";
    } 
    if (diceResult === 5) {
        resultDisplay.innerHTML = "<img src='scripts/images/dice-5.jpg'>";
    } 
    if (diceResult === 6) {
        resultDisplay.innerHTML = "<img src='scripts/images/dice-6.jpg'>";
    } 

    console.log(diceResult);
    // resultDisplay.innerHTML = diceResult;
}