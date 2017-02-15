import { takeEvery } from 'redux-saga'
import { browserHistory } from 'react-router'
import { ActionType } from '../actions'


function* gameOverSideEffects() {
  browserHistory.push('/board')
}

export function* watchGameRequest() {
  yield takeEvery(ActionType.GAME.GAME_OVER, gameOverSideEffects)
}
