import { INPUT_LETTER } from '../actions/actionTypes';

export function turnReducer(state = 7, action) {
  switch (action.type) {
    case INPUT_LETTER:
      return state--;
    default:
      return state;
  }
}
