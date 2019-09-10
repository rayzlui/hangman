import { INPUT_LETTER, NEW_GAME } from '../actions/actionTypes';

export function guessReducer(state = {}, action) {
  switch (action.type) {
    case INPUT_LETTER:
      return Object.assign({}, state, (state[action.letter] = true));
    case NEW_GAME:
      return {};
    default:
      return state;
  }
}
