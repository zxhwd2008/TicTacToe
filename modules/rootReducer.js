import { combineReducers } from 'redux-immutable'
import { Router, routerReducer } from './Router'
import { Game, gameReducer } from './Game'

const rootReducer = combineReducers({
  [Router.name]: routerReducer,
  [Game.name]: gameReducer,
})

export default rootReducer
