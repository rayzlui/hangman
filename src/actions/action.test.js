import { inputLetter, newGame } from './actions';
import { INPUT_LETTER, NEW_GAME } from './actionTypes';

describe('inputLetter', () => {
  it('should return obj', () => {
    const action = inputLetter('b');
    expect(action).toEqual({ type: INPUT_LETTER, letter: 'b' });
  });
});

describe('newGame', () => {
  it('should return obj', () => {
    const action = newGame();
    expect(action).toEqual({ type: NEW_GAME });
  });
});
