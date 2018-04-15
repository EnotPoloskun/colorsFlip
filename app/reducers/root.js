import { combineReducers } from 'redux';
import field from './field';

const rootReducer = combineReducers({
  level: field
});

export default rootReducer;
