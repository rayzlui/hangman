import React from 'react';
import { shallow } from 'enzyme';
import { WordView } from './WordView';

describe('WordView', () => {
  describe('no guesses', () => {
    const mockWord = 'potato'.split();
    const mockGuesses = {};
    const wrapper = shallow(<WordView word={mockWord} guesses={mockGuesses} />);
    it('should handle guess display', () => {
      const guessesDisplay = wrapper.find('.guess-display');
      expect(guessesDisplay.text()).toEqual('Already Guessed: ');
    });

    it('should handle word display', () => {
      const wordDisplay = wrapper.find('.word-display');
      expect(wordDisplay.text()).toEqual(' _  _  _  _  _  _ ');
    });
  });

  describe('some guesses', () => {
    const mockWord = 'potato'.split();
    const mockGuesses = { p: true, o: true };
    const wrapper = shallow(<WordView word={mockWord} guesses={mockGuesses} />);
    it('should handle guess display', () => {
      const guessesDisplay = wrapper.find('.guess-display');
      expect(guessesDisplay.text()).toEqual('Already Guessed: po');
    });

    it('should handle word display', () => {
      const wordDisplay = wrapper.find('.word-display');
      expect(wordDisplay.text()).toEqual(' po  _  _  _ o');
    });
  });

  describe('all guesses', () => {
    const mockWord = 'potato'.split();
    const mockGuesses = { p: true, o: true, t: true, a: true };
    const wrapper = shallow(<WordView word={mockWord} guesses={mockGuesses} />);
    it('should handle guess display', () => {
      const guessesDisplay = wrapper.find('.guess-display');
      expect(guessesDisplay.text()).toEqual('Already Guessed: pota');
    });

    it('should handle word display', () => {
      const wordDisplay = wrapper.find('.word-display');
      expect(wordDisplay.text()).toEqual('potato');
    });
  });
});
