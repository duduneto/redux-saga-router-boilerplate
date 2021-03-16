import { takeLatest, call, put, all } from "redux-saga/effects";

import * as services from "../utils/services";
import { fetchPostsSuccess, fetchPostsFailure } from "./actions";
import PostsTypes from "./types";

export function* fetchPostsAsync(action) {
  try {
    const response = yield call(services.default[action.fileName][action.functionName]);
    yield put(fetchPostsSuccess(response.data, action));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export function* fetchPostsStart() {
  yield takeLatest(PostsTypes.FETCH_START, fetchPostsAsync);
}

export function* postsSagas() {
  yield all([call(fetchPostsStart)]);
}
  