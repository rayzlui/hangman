import { connect } from 'react-redux';
import { HangManImage } from '../views/HangmanView';

function mapStateToProps(state) {
  return {
    turns: state.word.turns,
  };
}

export const HangManContainer = connect(
  mapStateToProps,
  null,
)(HangManImage);
