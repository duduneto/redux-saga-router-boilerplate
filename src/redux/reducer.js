import PostsTypes from "./types";

const initialState = {
  isFetching: false,
  posts: [],
  errorMessage: undefined,
};

const asyncReducer = (state = initialState, action) => {
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

export default asyncReducer;
