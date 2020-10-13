import { userAction } from "stores/actionTypes";

const initialState = {
  profile: null
};

export const userState = initialState;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userAction("get"):
      return state;
    default:
      return state;
  }
};

export default userReducer;
