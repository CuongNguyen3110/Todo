import { takeEvery, call, put, all } from 'redux-saga/effects';
import { recievePostsFromApi, createPostSuccess, finishLoading } from './actions/index';
import { apiFetchPost, apiAddNewPost } from './api'

function* watchFetchPosts() {
    yield takeEvery('REQUEST_POSTS', fetchPosts);
}

function* fetchPosts() {
    const data = yield call(apiFetchPost);
    yield put(recievePostsFromApi(data));
}

function* watchAddNewPost() {
    yield takeEvery('SUBMIT_POST', addANewPost);
}

function* addANewPost(action) {
    console.log(action)
    const { payload } = action;
    const response = yield call(apiAddNewPost, payload);
    yield put(createPostSuccess(response));
    yield put(finishLoading('FINISH_LOADING'))
}

export default function* rootSaga() {
    yield all([watchFetchPosts(), watchAddNewPost()]);
}