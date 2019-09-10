import { connect } from 'react-redux';
import { GameOverView } from '../views/GameOverView';

function mapStateToProps(state) {
  return {
    turns: state.word.turns,
    word: state.word.word,
    guesses: state.guesses,
  };
}

export const GameOverContainer = connect(
  mapStateToProps,
  null,
)(GameOverView);
