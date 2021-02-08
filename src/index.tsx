import 'semantic-ui-css/semantic.min.css';

import firebase from 'firebase/app';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { config } from './config';
import { Pages } from './pages';
import configureStore from './store/configureStore';

firebase.initializeApp(config.firebase);

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Pages />
    </Provider>,
    document.getElementById('root')
);
