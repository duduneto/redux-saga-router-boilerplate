import initialState from './initialState';

import { asyncReducer, syncReducer, teste } from "./reducer";

const listReducers = [asyncReducer, syncReducer, teste];

function allReducers(state = initialState, action) {
  var evolvedState;

  switch (action.type) {
    default:
      evolvedState = state;
      break;
  }

  return listReducers.reduce((s, r) => r(s, action), evolvedState);
}

export default allReducers;
