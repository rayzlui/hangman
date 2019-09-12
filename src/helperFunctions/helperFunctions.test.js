import { isLetter } from './helperFunctions';

describe('isLetter', () => {
  describe('alphabet input', () => {
    it('should return true', () => {
      const letter = isLetter('b');
      expect(letter).toBe(true);
    });
  });

  describe('non alphabet input', () => {
    it('should return false', () => {
      const notLetter = isLetter('.');
      expect(notLetter).toBe(false);
    });
  });
});

describe('isWinner', () => {
  describe('all guess in word', () => {
    it('should return true', () => {
      const guesses = { h: true, e: true, l: true, o: true, p: true, z: true };
      const word = 'hello'.split();
      const winner = isWinner(guesses, word);
      expect(winner).toEqual(true);
    });
  });
  describe('not all guess in word', () => {
    it('should return true', () => {
      const guesses = { h: true, e: true, l: true, o: true, p: true, z: true };
      const word = 'pasta'.split();
      const winner = isWinner(guesses, word);
      expect(winner).toEqual(false);
    });
  });
});
