import { NewGameButton } from '../views/NewGame'
import { newGame } from '../actions/actions'
import { connect } from 'react-redux'

function mapDispatchToProps(dispatch){
  return {
    newGame: () => dispatch(newGame())
  }
}

export const NewGameContainer = connect(
  null,
  mapDispatchToProps,
)(NewGameButton);
