import storage from 'redux-persist/lib/storage'
import { createMigrate } from 'redux-persist'
import { seamlessImmutableReconciler, seamlessImmutableTransformCreator } from 'redux-persist-seamless-immutable'

const PERSIST_VERSION = -1;             // increment this every time you do a new migration
const REDUCER_VERSION = '0.0';

const migrations = {
    PERSIST_VERSION: (state) => {
        // migration clear out device state
        return {
            ...state,
        }
    }
};

const transformerConfig = {
    // per reducer, list what data you want stored.
    // this helps avoid accidentally storing 'error' states
    // It's also possible to implement this differently at the reducer level btw, see redux-persist docs.
    whitelistPerReducer: {
        // WARNING: You also need to whitelist the reducer itself in persistConfig below!
        login: [
            'username',
            'user',
            'password',
            'pushToken'
        ]
    }
};

const REDUX_PERSIST = {
    active: true,
    reducerVersion: REDUCER_VERSION,
    storeConfig: {
        key: 'primary',
        version: PERSIST_VERSION,
        storage: storage,
        //blacklist: ['search', 'nav'],
        //whitelist: ['settings', 'contacts', 'eftBank', 'login'],
        stateReconciler: seamlessImmutableReconciler,
        transforms: [seamlessImmutableTransformCreator(transformerConfig)],
        //migrate: createMigrate(migrations, {debug: __DEV__})
    }
};

export default REDUX_PERSIST
