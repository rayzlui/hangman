import { INPUT_LETTER } from './actionTypes';

export function inputLetter(letter) {
  return { type: INPUT_LETTER, letter: letter };
}
