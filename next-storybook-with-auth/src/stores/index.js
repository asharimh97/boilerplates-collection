import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import ReduxThunk from "redux-thunk";

import reducers from "./reducers";

export const initStore = (initialState = {}, options) => {
  const middleware = composeWithDevTools(applyMiddleware(ReduxThunk));

  return createStore(reducers, initialState, middleware);
};
