import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  sample: sampleReducer,
  user: userReducer
});

export default reducers;
