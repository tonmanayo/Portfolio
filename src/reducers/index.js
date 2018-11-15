// import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import ThemeOptions from './ThemeOptions';
import Layout from './Layout';
import Auth from './Auth';
import { persistCombineReducers } from 'redux-persist/es'
import rootSaga from './../sagas/'
import ReduxPersist from "./../config/persistConfig"
import configureStore from './createStore'

export default () => {
    /* ------------- Assemble The Reducers ------------- */
    const rootReducer = persistCombineReducers(ReduxPersist.storeConfig, {
        userID: require('./userIDRedux').reducer,
        Auth,
        ThemeOptions,
        Layout,
        form: formReducer
    });
    return configureStore(rootReducer, rootSaga)
}