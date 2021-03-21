import PostsTypes from "./types";
import _ from 'lodash';

const initialState = {
  isFetching: false,
  posts: [],
  errorMessage: undefined,
};

export const syncReducer = (state, action) => {
  const newState = action.path ? {..._.set(state, action.path.split("."), action.payload)} : false;
  switch (action.type) {
    case PostsTypes.SYNC_CALL:
      return newState ? {
        ...newState,
      }: {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }

};

export const asyncReducer = (state, action) => {
  switch (action.type) {
    case PostsTypes.FETCH_START:
      return {
        ...state,
        isFetching: true,
      };

    case PostsTypes.FETCH_SUCCES:
      return {
        ...state,
        isFetching: false,
        list: action.payload,
      };

    case PostsTypes.FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};