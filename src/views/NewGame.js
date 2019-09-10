import React from 'react';
import PropTypes from 'prop-types'

export function NewGameButton(props) {
  const { newGame } = props;
  return <button onClick={newGame}>New Game</button>;
}

NewGameButton.propTypes = {
  newGame: PropTypes.func,
};