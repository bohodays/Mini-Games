const firstCards = document.querySelector('.first');
firstCards.addEventListener('click', () => {
  window.location.href = 'Rock-Paper-Scissors/index.html';
})

const secondCards = document.querySelector('.second');
secondCards.addEventListener('click', () => {
  window.location.href = '숫자야구/index.html';
})

const introPage = document.querySelector('.intro');
const cards = document.querySelectorAll('.cards');
introPage.addEventListener('click', () => {
  introPage.style.display = 'none';
  cards.forEach((card) => {
    card.style.display = 'block';
  })
})

document.addEventListener('keydown', () => {
  introPage.style.display = 'none';
  cards.forEach((card) => {
    card.style.display = 'block';
  })
})