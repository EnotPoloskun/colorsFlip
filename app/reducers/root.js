import { combineReducers } from 'redux';
import field from 'ColorsFlip/app/reducers/field';

const rootReducer = combineReducers({
  level: field
});

export default rootReducer;
