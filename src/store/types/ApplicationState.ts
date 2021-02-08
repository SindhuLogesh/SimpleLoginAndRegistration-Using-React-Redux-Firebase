import { RouterState } from 'connected-react-router';

import { DashboardState } from './DashboardState';
import { LoginState } from './LoginState';
import { RegistrationState } from './RegistrationState';
// The top-level state object
export interface ApplicationState {
    login: LoginState;
    router: RouterState;
    registration: RegistrationState;
    dashboard: DashboardState;
}
