import { connect } from 'react-redux'
import { Promise } from 'es6-promise'
import { Game } from '../routes/Game'
import {
  updateField,
  gameOver,
  Game as GameState,
} from '../modules/Game'

const mapStateToProps = state => ({
  players: GameState.players()(state),
})

const mapDispatchToProps = dispatch => ({
  updateField: (field, value) => dispatch(updateField(field, value)),
  gameOver: () => dispatch(gameOver()),
})

export const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)
