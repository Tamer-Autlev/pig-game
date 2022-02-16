'use strict';

// select elments
const player1 = document.querySelector(`.player--0`);
const player2 = document.querySelector(`.player--1`);
const currentScore1 = document.querySelector(`#current--0`);
const currentScore2 = document.querySelector(`#current--1`);
const rollingDice = document.querySelector(`.dice`);
const playerScore1 = document.querySelector(`#score--0`);
const playerScore2 = document.querySelector(`#score--1`);
const rolldicebtn = document.querySelector(`.btn--roll`);
const holdbtn = document.querySelector(`.btn--hold`);
const newGamebtn = document.querySelector(`.btn--new`);

let playing, activeplayer, currentscore, scores;
//startiing the game conditions
const starting = function () {
  playing = true;
  scores = [0, 0];
  currentscore = 0;
  activeplayer = 0;
  playerScore1.textContent = 0;
  playerScore2.textContent = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  player1.classList.remove(`player--winner`);
  player2.classList.remove(`player--winner`);
  rollingDice.classList.add(`hidden`);
  player2.classList.remove(`player--active`);
  player1.classList.add(`player--active`);
};
starting();
// change the player
const change = function () {
  document.querySelector(`#current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  currentscore = 0;
  document.querySelector(`#current--${activeplayer}`);
  player1.classList.toggle(`player--active`);
  player2.classList.toggle(`player--active`);
};
// Rolling dice
rolldicebtn.addEventListener(`click`, () => {
  if (playing) {
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    rollingDice.classList.remove(`hidden`);
    rollingDice.src = `dice-${randomDice}.png`;
    if (randomDice !== 1) {
      currentscore += randomDice;
      document.querySelector(`#current--${activeplayer}`).textContent =
        currentscore;
    } else {
      change();
    }
  }
});
//
holdbtn.addEventListener(`click`, function () {
  if (playing) {
    scores[activeplayer] += currentscore;
    document.querySelector(`#score--${activeplayer}`).textContent =
      scores[activeplayer];
  }
  if (scores[activeplayer] >= 100) {
    playing = false;
    // document.querySelector(`#score--${activeplayer}`).textContent = `winner`;
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.add(`player--winner`);
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.remove(`player--active`);
    dice.classList.add(`hidden`);
  } else {
    change();
  }
});

newGamebtn.addEventListener(`click`, starting);
