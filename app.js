const nameContainer = document.querySelector('#name-container');
const nameInput = document.querySelector('#name-input');
const nameBtn = document.querySelector('#name-button');
const playContainer = document.querySelector('.play-scene');
const container = document.querySelector('.btn-container');
const feedbackLabel = document.querySelector('#result-feedback');
const resultLog = document.querySelector('#result-log');
const resultLabel = document.querySelector('#reset-label');
const resetContainer = document.querySelector('#reset-container');
const resetBtn = document.querySelector('#reset-button');
const playerPick = document.querySelector('#player-chooses');
const cpuPick = document.querySelector('#cpu-chooses');

let pName;
const winCondition = 3;
const pRock = 0;
const pPaper = 1;
const pScissors = 2;
let cpuChooses = Math.round(Math.random() * 2);
let playerChooses = -1;
let playerScore = 0;
let cpuScore = 0;

nameBtn.addEventListener('click', readName);
container.addEventListener('click', readInput);

function readName(e) {
    e.preventDefault();
    pName = nameInput.value
    resultLog.innerText = `${playerScore}(${pName}) - ${cpuScore}(CPU)`;
    playerPick.innerText = `${pName}: `;
    nameInput.value = '';
    nameContainer.style.display = 'none';
    playContainer.style.display = 'block';
}
function readInput(e) {
    switch (e.target.innerText) {
        case 'Sten':
            playerChooses = pRock;
            break;
        case 'Sax':
            playerChooses = pScissors;
            break;
        case 'Påse':
            playerChooses = pPaper;
            break;
        default:
            console.log('Error');
            alert('Error');
            break;
    }
    playerPick.innerText = `${pName}: ${e.target.innerText}`;
    decideResult(playerChooses);
}

function decideResult(youChooses) {
    cpuChooses = newRandom();
    cpuChoice(cpuChooses);
    if (youChooses == cpuChooses) {
        feedbackLabel.innerText = 'Draw, try again';
    }
    else if (youChooses == pRock && cpuChooses == pPaper || youChooses == pScissors && cpuChooses == pPaper || youChooses == pPaper && cpuChooses == pRock) {
        feedbackLabel.innerText = "You've won! Try again"
        playerScore++;
    }
    else {
        feedbackLabel.innerText = 'Loss, try again'
        cpuScore++;
    }
    playerChooses = resetChoice();
    resultLog.innerText = `${playerScore}(${pName}) - ${cpuScore}(CPU)`;
    if (playerScore >= winCondition) {
        resultLabel.innerText = 'Du vann! :)';
        resetContainer.style.display = 'block';
    }
    else if (cpuScore >= winCondition) {
        resultLabel.innerText = 'CPU vann! :(';
        resetContainer.style.display = 'block';
    }
}

resetBtn.addEventListener('click', function () {
    playerScore = 0;
    cpuScore = 0;
    feedbackLabel.innerText = 'CPU väntar på svar...';
    resultLog.innerText = `${playerScore}(${pName}) - ${cpuScore}(CPU)`;
    nameContainer.style.display = 'block';
    resetContainer.style.display = 'none';
    playContainer.style.display = 'none';
    resultLabel.innerText = '';
    cpuPicker("");
});

function cpuChoice(chooses){
    switch (chooses) {
      case 0:
        cpuPicker("Sten");
        break;
      case 1:
        cpuPicker("Påse");
        break;
      case 2:
        cpuPicker("Sax");
        break;
      default:
        console.log("Error");
        alert("Error");
        break;
    }
}

function cpuPicker(label){
    return cpuPick.innerText = "CPU: " + label;
}

function newRandom() {
    return Math.round(Math.random() * 2);
}

function resetChoice() {
    return -1;
}