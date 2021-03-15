import initialState from './initialState';

import asyncReducer from "./reducer";

const listReducers = [asyncReducer];

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
