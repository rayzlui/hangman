import { guessReducer } from './guessReducer';
import { INPUT_LETTER, NEW_GAME } from '../actions/actionTypes';

describe('guessReducer', () => {
  describe('initial', () => {
    it('should return obj', () => {
      const reducer = guessReducer();
      expect(reducer).toEqual({});
    });
  });

  describe('INPUT_LETTER action type', () => {
    it('should return obj', () => {
      const action = { type: INPUT_LETTER, letter: 'c' };
      const initial = {};
      const reducer = guessReducer(initial, action);
      expect(reducer).toEqual({ c: true });
    });

    it('should return obj', () => {
      const action = { type: INPUT_LETTER, letter: 'e' };
      const initial = { f: true };
      const reducer = guessReducer(initial, action);
      expect(reducer).toEqual({ f: true, e: true });
    });

    it('should return obj', () => {
      const action = { type: INPUT_LETTER, letter: 'f' };
      const initial = { f: true };
      const reducer = guessReducer(initial, action);
      expect(reducer).toEqual({ f: true });
    });
  });

  describe('NEW_GAME action', () => {
    it('should return empty', () => {
      const action = { type: NEW_GAME };
      const initial = { j: true, i: true, m: true, l: true, k: true };
      const reducer = guessReducer(initial, action);
      expect(reducer).toEqual({});
    });
  });
});
