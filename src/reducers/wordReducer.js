import wordArray from '../5desk';
import { NEW_GAME, INPUT_LETTER } from '../actions/actionTypes';

function newWord() {
  return wordArray[Math.floor(Math.random() * wordArray.length)]
    .trim()
    .split('');
}

function initialState() {
  return {
    word: newWord(),
    turns: 7,
  };
}

export function wordReducer(state = initialState(), action) {
  switch (action.type) {
    case NEW_GAME:
      return initialState();
    case INPUT_LETTER:
      if (!state.word.includes(action.letter)) {
        return Object.assign({}, state, state.turns--);
      }
      return state;
    default:
      return state;
  }
}
