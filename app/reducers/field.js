import GameService from "../services/gameService"
import levelsData from '../../levelsData.json';
import {
  MAKE_TURN,
  UNDO_TURN,
  RESTART,
  HIGHLIGHT,
  DISABLE_USER_EVENTS,
  LOAD_LEVEL
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

const restart = (state, action) => ({
  ...state,
  field: state.initialField.map((row) => { return [...row] }),
  history: []
})

const highlight = (state, action) => {
  let highlighted;

  if (action.row != undefined) {
    highlighted = { row: action.row, column: action.column }
  }

  return {
    ...state,
    highlighted
  }
}

const disableUserEvents = (state, action) => ({
  ...state,
  userEventsDisabled: action.disabled
})

const loadLevel = (state, action) => ({
  ...levelsData[action.number],
  initialField: levelsData[action.number].field.map((row) => { return [...row] }),
  history: [],
  highlighted: undefined,
  userEventsDisabled: false,
  isGameSolved: false,
  levelNumber: action.number
})

const ACTION_HANDLERS = {
  [MAKE_TURN] : makeTurn,
  [UNDO_TURN] : undoTurn,
  [RESTART] : restart,
  [HIGHLIGHT] : highlight,
  [DISABLE_USER_EVENTS] : disableUserEvents,
  [LOAD_LEVEL] : loadLevel
}

const reducer = (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export default reducer
