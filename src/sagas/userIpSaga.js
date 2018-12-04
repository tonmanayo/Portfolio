import { put, call } from 'redux-saga/effects'
import UserIDActions from "../reducers/userIDRedux";

// attempts to login
export function* getUserID(api) {
    const response = yield call(api.getUserIDsPics);
    if (response.ok) {
        yield put(UserIDActions.userIdGetSuccess(response.data))
    } else {
        yield put(UserIDActions.userIdFailure(response.error))
    }
}

export function* postUserID(api, action) {
    const {pic, ip} = action;

    let picData = pic.split(',')[1];
    if (picData.length > 0) {
        // yield call(api.setHeader, 'Content-Type', 'multipart/form-data');
        const response = yield call(api.postUserIDPic, ip, picData);
        if (response.ok) {
            yield put(UserIDActions.userIdPostSuccess(response.data));
            yield put(UserIDActions.userIdGetRequest())
        } else {
            yield put(UserIDActions.userIdFailure(response.error))
        }
    }
}

export function* deleteUserID(api, action) {
    const {id} = action;
    const response = yield call(api.deleteUserIDPic, id);

    if (response.ok) {
      yield put(UserIDActions.userIdPostSuccess(response.data));
      // yield call(UserIDActions.userIdGetRequest())
    } else {
      yield put(UserIDActions.userIdFailure(response.error))
    }
}