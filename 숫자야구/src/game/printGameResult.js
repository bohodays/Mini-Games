import getComputerInput from '../input/getComputerInput.js';
import BaseballGame from '../index.js'

function printCorrectAnswer() {
  const main = document.querySelector('main');
  const result = document.createElement('div');
  result.setAttribute('class', 'result');
  result.innerHTML = `
    <p class="result__comment">
      π 3μ€νΈλΌμ΄ν¬! π<br>
      μΆνν©λλ€! μ λ΅μλλ€ π
    </p>
    <button class="restart__button">
      μ¬μμ
    </button>
  `;
  main.append(result)

  const restartButton = document.querySelector('.restart__button');
  restartButton.addEventListener('click', () => {
    const bordRecords = document.querySelector('.bord__records');
    result.remove();
    bordRecords.innerHTML = '';
    location.reload();
  });
}


function printIncorrectAnswer(bordRecords, gameResult) {
    bordRecords.innerHTML += `
      <p class="record">${gameResult}</p>
    `;
  }


export default function printGameResult(gameResult) {
  const bordRecords = document.querySelector('.bord__records');
  
  if (gameResult === 'μ λ΅') {
    const result = document.createElement('div');
    result.setAttribute('class', 'result');
    printCorrectAnswer();
    return true;
  }
  printIncorrectAnswer(bordRecords, gameResult);
  return false;
};


