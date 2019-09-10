import { RootView } from '../views/RootView';
import { inputLetter } from '../actions/actions';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    guesses: state.guesses,
    turns: state.word.turns,
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    submitGuess: guess => dispatch(inputLetter(guess)),
  };
}

export const RootContainer = connect(
  mapStateToProps,
  mapDispatchtoProps,
)(RootView);
