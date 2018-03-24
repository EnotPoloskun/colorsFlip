import GameService from "../services/gameService"
import {
  MAKE_TURN,
  UNDO_TURN,
} from "../actions/field"

const makeTurn = (state, action) => {
  let newField = GameService.makeTurn(state.field, state.colors, action.row, action.column)

  return {
    ...state,
    field: newField,
    isGameSolved: GameService.isGameSolved(newField, state.goal),
    history: state.history.concat({row: action.row, column: action.column})
  }
}

const undoTurn = (state, action) => {
  let [lastTurn] = state.history.slice(-1)

  if (lastTurn) {
    return {
      ...state,
      field: [...GameService.undoTurn(state.field, state.colors, lastTurn.row, lastTurn.column)],
      history: state.history.slice(0, -1)
    }
  } else {
    return state
  }
}

const ACTION_HANDLERS = {
  [MAKE_TURN] : makeTurn,
  [UNDO_TURN] : undoTurn,
}

const reducer = (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export default reducer
