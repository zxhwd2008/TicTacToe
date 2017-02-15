import { createState } from '../utils/createState'

export const Game = createState({
  name: 'Game',
  fields: {
    players: [],
    winner: null,
  },
})
