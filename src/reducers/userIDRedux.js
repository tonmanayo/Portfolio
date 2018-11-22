import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    userIdSuccess: ['data'],
    userIdRequest: null,
    userIdFailure: null,
});

export const UserIDTypes = Types;
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    data: {},
    fetching: false,
    error: ''
});

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) =>
    state.merge({ fetching: true });

// successful api lookup
export const success = (state, action) => {
    const {data} = action;
    return state.merge({ fetching: false, error: '', data })
};

// Something went wrong somewhere.
export const failure = (state, {error}) =>
    state.merge({ fetching: false, error: error });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.USER_ID_REQUEST]: request,
    [Types.USER_ID_SUCCESS]: success,
    [Types.USER_ID_FAILURE]: failure
});
