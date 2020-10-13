import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import ReduxThunk from "redux-thunk";

import reducers from "./reducers";

const middlewares = [ReduxThunk];

const makeStore = context => {
  const reducer = reducers;
  const initialState = {};
  const middleware = composeWithDevTools(applyMiddleware(...middlewares));

  return createStore(reducer, initialState, middleware);
};

export const wrapper = createWrapper(makeStore);
