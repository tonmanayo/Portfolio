import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    userIdPostRequest: ['ip', 'pic'],
    userIdGetRequest: null,
    userIdGetSuccess: ['ips', 'pics'],
    userIdPostSuccess: null,
    userIdFailure: null,
});

export const UserIDTypes = Types;
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    fetching: false,
    error: '',
    data: [],
    message: '',
    title: ''
});

/* ------------- Reducers ------------- */

// request the data from an api
export const Request = (state) =>
    state.merge({ fetching: true });

// successful api lookup
export const getSuccess = (state, action) => {
    const {message, data, title} = action;
    return state.merge({ fetching: false, error: '', message, data, title })
};

export const postSuccess = (state, action) => {
    const {data} = action;
    return state.merge({ fetching: false, error: '', data })
};

// Something went wrong somewhere.
export const failure = (state, {error}) =>
    state.merge({ fetching: false, error: error });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.USER_ID_GET_REQUEST]: Request,
    [Types.USER_ID_POST_REQUEST]: Request,
    [Types.USER_ID_POST_SUCCESS]: postSuccess,
    [Types.USER_ID_GET_SUCCESS]: getSuccess,
    [Types.USER_ID_FAILURE]: failure
});
