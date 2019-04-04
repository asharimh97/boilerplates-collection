import { SAMPLE_ACTION } from "../actionTypes";

export const sample = () => dispatch => {
  dispatch({
    type: SAMPLE_ACTION,
    payload: {
      data: {
        foor: "bar"
      }
    }
  });
};
