import PostsTypes from "./types";

export const syncCall = (payload, path) => {
  return {
    type: PostsTypes.SYNC_CALL,
    payload,
    path
  };
};

export const fetchPostsStart = (fileName, functionName) => {
  return {
    type: PostsTypes.FETCH_START,
    fileName,
    functionName,
  };
};

export const fetchPostsSuccess = (posts, action) => {
  return {
    type: PostsTypes.FETCH_SUCCES,
    payload: posts,
  };
};

export const fetchPostsFailure = (errorMessage) => {
  return {
    type: PostsTypes.FETCH_FAILURE,
    payload: errorMessage,
  };
};
