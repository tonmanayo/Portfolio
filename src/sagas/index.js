import { takeLatest, all } from 'redux-saga/effects'
import API from './../services/Api'


/* ------------- Types ------------- */

import { UserIDTypes } from './../reducers/userIDRedux'

/* ------------- Sagas ------------- */

import { getUserID, postUserID } from './userIpSaga'


/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api =  API.create();

export const webApi = {
    api: api
};
/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
    yield all([
        takeLatest(UserIDTypes.USER_ID_GET_REQUEST, getUserID, api),
        takeLatest(UserIDTypes.USER_ID_POST_REQUEST, postUserID, api)
    ])
}
