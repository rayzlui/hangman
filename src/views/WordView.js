import React from 'react';
import PropTypes from 'prop-types';

export function WordDisplay(props) {
  const { word, guesses } = props;
  return (
    <div className="word-display">
      {word.reduce((acc, letter, index) => {
        let showing;
        if (guesses.includes(letter)) {
          showing = letter;
        } else {
          showing = ' _ ';
        }
        acc.push(
          <h3 key={index} className="word-display">
            {showing}
          </h3>,
        );
        return acc;
      }, [])}
      ;
    </div>
  );
}

WordDisplay.propTypes = {
  word: PropTypes.array,
  guesses: PropTypes.array,
};
