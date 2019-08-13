import { combineReducers } from "redux";

import { alert } from "./alertReducer";
import { authentication } from "./authReducer";

const rootReducer = combineReducers({
  alert,
  authentication
});
export default rootReducer;
