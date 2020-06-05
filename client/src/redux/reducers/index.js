import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  errors:errorReducer,
  todo:todoReducer
});

export default rootReducer;