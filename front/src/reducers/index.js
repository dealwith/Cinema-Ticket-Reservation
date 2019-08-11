import { combineReducers } from 'redux';
import { alert } from './alertReducer';
import { authentication } from './authReducer';
import { users } from './userReducer';

const rootReducer = combineReducers({
  alert,
  users,
  authentication
})

export default rootReducer;