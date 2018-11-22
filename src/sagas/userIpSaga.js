import { put, call } from 'redux-saga/effects'
import UserIDActions from "../reducers/userIDRedux";

// attempts to login
export function* userID(api) {
    const response = yield call(api.postUserLookup);

    if (response.ok) {
        yield put(UserIDActions.userIdSuccess(response.data))
    } else {
        yield put(UserIDActions.userIdFailure(response.error))
    }
}
