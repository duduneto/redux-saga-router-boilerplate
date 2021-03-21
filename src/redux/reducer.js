import PostsTypes from "./types";
import _ from 'lodash';

const initialState = {
  isFetching: false,
  posts: [],
  errorMessage: undefined,
};

export const teste = (state, action) => {
  console.log('action =>', action);

  switch (action.type) {
    case 'teste':
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }

};

export const syncReducer = (state, action) => {
//   console.log('Action => ', action);
//   switch (action.type) {
//     case PostsTypes.SYNC_CALL:
//       return {
//         ...state,
//         [action.path.split(".")[0]]: {[action.path.split(".")[1]]: action.payload}
//       };

//     default:
//       return state;
//   }
  const newState = action.path ? {..._.set(state, action.path, action.payload)} : false;
  const targetState = action.path && [action.path.split(".")[0]];
  const targetValue = action.path && newState[targetState];
  switch (action.type) {
    case PostsTypes.SYNC_CALL:
      return newState ? {
        ...state,
        [targetState]: {...targetValue}
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