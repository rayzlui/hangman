import React from 'react';
import PropTypes from 'prop-types';

export function HangManImage(props) {
  const image = {
    0: 'image link for 0 turns',
    1: 'image link for 1 turns',
    2: 'image link for 2 turns',
    3: 'image link for 3 turns',
    4: 'image link for 4 turns',
    5: 'image link for 5 turns',
    6: 'image link for 6 turns',
    7: 'image link for 7 turns',
  };
  let { turns } = props;
  return <img className="hangman-image" src={image[turns]} alt={turns} />;
}

HangManImage.propTypes = {
  image: PropTypes.string,
  turns: PropTypes.number,
};
