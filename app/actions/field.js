export const MAKE_TURN = "MAKE_TURN"
export const UNDO_TURN = "UNDO_TURN"

export const makeTurn = (row, column) => ({
  type: MAKE_TURN,
  row,
  column,
})

export const undoTurn = () => ({
  type: UNDO_TURN
})
