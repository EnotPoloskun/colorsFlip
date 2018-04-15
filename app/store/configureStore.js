import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from "../reducers/root"

let initialState = {
  level: {
    initialField: [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ],
    field: [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ],
    colors: [1, 2, 3],
    history: [],
    solution: [{ row: 1, column: 1 }, { row: 2, column: 2 }, { row: 0, column: 0 }],
    highlighted: undefined,
    userEventsDisabled: false,
    isGameSolved: false
  }
}

export default function configureStore() {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
  );
}
