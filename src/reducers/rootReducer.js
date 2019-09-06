import { combineReducers } from 'redux';
import { wordReducer } from './wordReducer';
import { guessReducer } from './guessReducer';
import { turnReducer } from './turnReducer';

export const rootReducer = combineReducers({
  word: wordReducer,
  guesses: guessReducer,
  turns: turnReducer,
});
