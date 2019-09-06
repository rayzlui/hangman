import { WordView } from '../views/WordView';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    word: state.word,
    guesses: state.guesses,
  };
}

export const WordContainer = connect(
  mapStateToProps,
  null,
)(WordView);
