import GameService from "../services/gameService";
import {
  MAKE_TURN,
  UNDO_TURN,
} from "../actions/field";

const makeTurn = (state, action) => {
  let newField = GameService.makeTurn(state.field, state.colors, action.row, action.column);

  return {
    ...state,
    field: newField,
    isGameSolved: GameService.isGameSolved(newField, state.goal)
  };
};

const undoTurn = (state, action) => ({
  ...state,
  field: [...GameService.undoTurn(state.field, state.colors, action.row, action.column)],
});

const ACTION_HANDLERS = {
  [MAKE_TURN] : makeTurn,
  [UNDO_TURN] : undoTurn,
};

const reducer = (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default reducer;
