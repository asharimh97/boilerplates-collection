import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  auth: authReducer,
  form: formReducer,
  user: userReducer
});

export default reducers;
