import React from 'react';
import PropTypes from 'prop-types';

export function WordView(props) {
  const { word, guesses } = props;
  return (
    <>
      <section className="guess-display">
        Already Guessed: {Object.keys(guesses)}
      </section>
      <section className="word-display">
        {word.reduce((acc, letter) => {
          let showing;
          if (guesses[letter] === true) {
            showing = letter;
          } else {
            showing = ' _ ';
          }
          acc.push(showing);
          return acc;
        }, [])}
      </section>
    </>
  );
}

WordView.propTypes = {
  word: PropTypes.array,
  guesses: PropTypes.object,
  submitGuess: PropTypes.func,
};
