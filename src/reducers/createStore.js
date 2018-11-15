import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import ReduxPersist from './../config/persistConfig'
import { persistReducer, persistStore } from 'redux-persist'
import createLogger from 'redux-logger';

// creates the store
export default (rootReducer, rootSaga) => {
    /* ------------- Redux Configuration ------------- */

    const middleware = [];
    const enhancers = [];

    const sagaMiddleware = createSagaMiddleware();
    middleware.push(sagaMiddleware);
    middleware.push(createLogger);

    /* ------------- Assemble Middleware ------------- */

    enhancers.push(applyMiddleware(...middleware));

    const reducer = persistReducer(ReduxPersist.storeConfig, rootReducer);

    /* ------------- AutoRehydrate Enhancer ------------- */
    let store = createStore(reducer, ...enhancers);
    let persistor = persistStore(store);

    // kick off root saga
    sagaMiddleware.run(rootSaga);

    return {persistor, store}
}
