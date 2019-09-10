import PropTypes from 'prop-types';
import React from 'react';
import { HangManContainer } from '../containers/HangmanContainer';
import { WordContainer } from '../containers/WordContainer';
import { GameOverContainer } from '../containers/GameOverContainer';
import { isLetter } from '../helperFunctions/helperFunctions';

export function RootView(props) {
  const { submitGuess, guesses, turns } = props;
  return (
    <div
      tabIndex="0"
      onKeyDown={e => {
        let pressedKey = e.key;
        if (isLetter(pressedKey) && guesses[pressedKey] !== true) {
          if (turns > 0) {
            submitGuess(pressedKey);
          }
        }
      }}
      className="root-view"
    >
      <h1>Hangman</h1>
      <GameOverContainer />
      <HangManContainer />
      <WordContainer />
    </div>
  );
}

RootView.propTypes = {
  guesses: PropTypes.object,
  submitGuess: PropTypes.func,
};
