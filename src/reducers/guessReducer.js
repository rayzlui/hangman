import { INPUT_LETTER } from '../actions/actionTypes';

export function guessReducer(state = [], action) {
  switch (action.type) {
    case INPUT_LETTER:
      return state.slice().push(action.letter);
    default:
      return state;
  }
}
