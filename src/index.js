import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import './assets/styles/base.scss';
// import 'sweetalert/dist/sweetalert.css';
import Main from './pages/Main';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';


const store = configureStore();
const rootElement = document.getElementById('root');

const renderApp = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                <Component />
            </HashRouter>
        </Provider>,
        rootElement
    );
};

renderApp(Main);

if (module.hot) {
    module.hot.accept('./pages/Main', () => {
        const NextApp = require('./pages/Main').default
        renderApp(NextApp);
    });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
