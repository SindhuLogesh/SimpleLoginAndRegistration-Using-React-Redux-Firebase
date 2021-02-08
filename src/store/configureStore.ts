import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import { applyMiddleware, CombinedState, compose, createStore, Store } from 'redux';
import thunk from 'redux-thunk';

import { createRootReducer } from './reducer';
import { ApplicationAction, ApplicationState } from './types';

export const history: History = createBrowserHistory();

export default function configureStore(): Store<CombinedState<ApplicationState>, ApplicationAction> {
    const middleware = [thunk, routerMiddleware(history)];

    const enhancers = [];
    // eslint-disable-next-line @typescript-eslint/ban-types
    const windowIfDefined = typeof window === 'undefined' ? null : ((window as unknown) as Record<string, () => Function>);
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }

    return createStore(createRootReducer(history), compose(applyMiddleware(...middleware), ...enhancers));
}
