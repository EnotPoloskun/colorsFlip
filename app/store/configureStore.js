import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from "../reducers/root"

let initialState = {
  level: {}
}

export default function configureStore() {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
  );
}
