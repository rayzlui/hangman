import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    turns: state.turns,
  };
}

export const HangManContainer = connect(
  mapStateToProps,
  null,
);
