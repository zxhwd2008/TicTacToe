import { fork } from 'redux-saga/effects'
import { watchGameRequest } from './Game/GameSagas'

export default function* rootSagas() {
  yield [
    fork(watchGameRequest)
  ]
}
