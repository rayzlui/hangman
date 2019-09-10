import { WordView } from '../views/WordView';
import { connect } from 'react-redux';
import { inputLetter } from '../actions/actions';

function mapStateToProps(state) {
  return {
    word: state.word.word,
    guesses: state.guesses,
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    submitGuess: guess => dispatch(inputLetter(guess)),
  };
}

export const WordContainer = connect(
  mapStateToProps,
  mapDispatchtoProps,
)(WordView);
