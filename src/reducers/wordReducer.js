import wordArray from './5desk';
import { NEW_GAME } from '../actions/actionTypes';

function newWord() {
  return wordArray[Math.floor(Math.random() * wordArray.length)].trim();
}

export function wordReducer(state = newWord(), action) {
  switch (action.type) {
    case NEW_GAME:
      return newWord();
    default:
      return state;
  }
}
