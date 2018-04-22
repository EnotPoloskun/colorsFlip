import { combineReducers } from 'redux'
import field from 'ColorsFlip/app/reducers/field'
import list from 'ColorsFlip/app/reducers/list'

const rootReducer = combineReducers({
  level: field,
  list: list,
});

export default rootReducer
