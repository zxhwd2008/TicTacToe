import { connect } from 'react-redux'
import { LeaderBoard } from '../routes/LeaderBoard'
import {
  Game as GameState,
} from '../modules/Game'

const mapStateToProps = state => ({
  players: GameState.players()(state),
  winner: GameState.winner()(state),
})

export const LeaderBoardContainer = connect(
  mapStateToProps
)(LeaderBoard)
