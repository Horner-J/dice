const resultDisplay = document.getElementById('result');
const rollDiceButton = document.getElementById('roll)');

let diceResult 

rollDiceButton.addEventListener('click', event => {
    diceRoll();
});

function diceRoll() {
    const diceResult = Math.floor(Math.random() * 6) + 1;
    
    console.log(diceResult);

    resultDisplay.innerHTML = diceResult;
}