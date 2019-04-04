import { SAMPLE_ACTION } from "../actionTypes";

const sampleReducer = (state = {}, action) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return {
        ...state,
        ...action.payload.data
      };
    default:
      return state;
  }
};

export default sampleReducer;
