import { put, call } from 'redux-saga/effects'

// attempts to login
export function* userID(api) {
    const response = yield call(api.postUserLookup);

    if (response.ok) {
        console.log(response.data)

    } else {

    }
}
