import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { CombinedState, combineReducers, Reducer } from 'redux';

import { ApplicationAction, ApplicationState } from '../types';
import { DashboardReducer } from './DashboardReducer';
import { LoginReducer } from './LoginReducer';
import { RegistrationReducer } from './RegistrationReducer';

export const createRootReducer = (history: History): Reducer<CombinedState<ApplicationState>, ApplicationAction> =>
    combineReducers({
        login: LoginReducer,
        router: connectRouter(history),
        registration: RegistrationReducer,
        dashboard: DashboardReducer,
    });
