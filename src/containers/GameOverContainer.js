import { connect } from 'react-redux';
import { GameOverView } from '../views/GameOverView';
import { isWinner } from '../helperFunctions/helperFunctions';

function mapStateToProps(state) {
  return {
    turns: state.word.turns,
    word: state.word.word,
    isWinner: isWinner(state.guesses, state.word),
  };
}

export const GameOverContainer = connect(
  mapStateToProps,
  null,
)(GameOverView);
