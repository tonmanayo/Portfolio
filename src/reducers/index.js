// import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import ThemeOptions from './ThemeOptions';
import Layout from './Layout';
import Auth from './Auth';
// import { persistCombineReducers } from 'redux-persist/es'
// import rootSaga from '../Sagas/'
import ReduxPersist from "./../config/persistConfig"
export default {
  Auth,
  ThemeOptions,
  Layout,
  form: formReducer
};