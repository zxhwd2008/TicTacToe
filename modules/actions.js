import keyMirror from 'key-mirror-nested'

export const ActionType = keyMirror({
  GAME: {
    UPDATE_FIELD: null,
    GAME_OVER: null,
  },
  LEADERBOARD: {
    UPDATE_FIELD: null,
  },
})
