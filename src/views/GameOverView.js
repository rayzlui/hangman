import React from 'react';
import { isWinner } from '../helperFunctions/helperFunctions';
import { NewGameContainer } from '../containers/NewGameContainer';

export function GameOverView(props) {
  const { guesses, word, turns } = props;

  if (isWinner(guesses, word)) {
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
