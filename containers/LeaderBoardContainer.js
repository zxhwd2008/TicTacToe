import { connect } from 'react-redux'
import { LeaderBoard } from '../routes/LeaderBoard'
import {
  updateField,
  Game as GameState,
} from '../modules/Game'

const mapStateToProps = state => ({
  players: GameState.players()(state),
  winner: GameState.winner()(state),
})

const mapDispatchToProps = dispatch => ({
  updateField: (field, value) => dispatch(updateField(field, value)),
})

export const LeaderBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaderBoard)
