import { put, call } from 'redux-saga/effects'

// attempts to login
export function* userID(api, { data }) {
    const response = yield call(api.postUserLookup);

    if (response.ok) {
        console.log(response)

    } else {

    }
}
