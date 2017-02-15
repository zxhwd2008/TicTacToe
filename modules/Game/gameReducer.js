import { createReducer } from '../utils/reducerUtils'
import { Game } from './Game'
import { ActionType } from '../actions'

export const gameReducer = createReducer(Game.create(), {
  [ActionType.GAME.UPDATE_FIELD]:
  (state, action) => Game[action.payload.field](action.payload.value)(state),
})

export const updateField = (field, value) => ({
  type: ActionType.GAME.UPDATE_FIELD,
  payload: {
    field,
    value,
  },
})

export const gameOver = () => ({
  type: ActionType.GAME.GAME_OVER,
})
