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

export function* postUserID(api, {ip, pic}) {
    const response = yield put(api.postUserIDPic(ip, pic));

    if (response.ok) {
        yield put(UserIDActions.userIdPostSuccess)
    } else {
        yield put(UserIDActions.userIdFailure(response.error))
    }
}