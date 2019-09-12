import React from 'react';
import { NewGameContainer } from '../containers/NewGameContainer';

export function GameOverView(props) {
  const { isWinner, word, turns } = props;

  if (isWinner) {
    return (
      <>
        <h1>You Win!</h1>
        <NewGameContainer />
      </>
    );
  } else {
    if (turns !== 0) {
      return null;
    } else {
      return (
        <>
          <h1>You Lose!</h1>
          <p>Word was {word}</p>
          <NewGameContainer />
        </>
      );
    }
  }
}
