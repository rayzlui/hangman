import { combineReducers } from 'redux';
import { wordReducer } from './wordReducer';
import { guessReducer } from './guessReducer';

export const rootReducer = combineReducers({
  word: wordReducer,
  guesses: guessReducer,
});
