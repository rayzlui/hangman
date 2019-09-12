import { wordReducer } from './wordReducer';
import { NEW_GAME, INPUT_LETTER } from '../actions/actionTypes';

describe('wordReducer', () => {
  describe('initial', () => {
    const reducer = wordReducer();
    expect(reducer.turns).toEqual(7);
    expect(reducer.word).toBeTruthy();
  });

  describe('NEW_GAME action', () => {
    const word = 'pumpkin'.split();
    const initial = { word: word, turns: 6 };
    const action = { type: NEW_GAME };
    const reducer = wordReducer(initial, action);
    expect(reducer.turns).toEqual(7);
    expect(reducer.word.join()).not.toEqual(word.join());
  });

  describe('INPUT_LETTER action', () => {
    const word = 'kumquat'.split();
    const initialState = { word: word, turns: 7 };
    describe('guess correct', () => {
      it('should return state', () => {
        const action = { type: INPUT_LETTER, letter: 'q' };
        const reducer = wordReducer(initialState, action);
        expect(reducer.turns).toEqual(initialState.turns);
        expect(reducer.word.join()).toEqual(word.join());
      });
    });

    describe('guess incorrect', () => {
      it('should subtract turns', () => {
        const action = { type: INPUT_LETTER, letter: 'z' };
        const reducer = wordReducer(initialState, action);
        expect(reducer.turns).toEqual(initialState.turns - 1);
        expect(reducer.word.join()).toEqual(word.join());
      });
    });
  });
});
