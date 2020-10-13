import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  token: null,
  loggedIn: false
};

export const authState = initialState;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default authReducer;
