import { INPUT_LETTER, NEW_GAME } from './actionTypes';

export function inputLetter(letter) {
  return { type: INPUT_LETTER, letter: letter };
}

export function newGame() {
  return { type: NEW_GAME };
}
