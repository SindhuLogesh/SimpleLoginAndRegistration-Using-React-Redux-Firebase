import { LocationChangeAction, RouterState } from 'connected-react-router';

import { LoginAction } from './LoginAction';
import { RegistrationAction } from './RegistrationAction';

export type ApplicationAction = LoginAction | LocationChangeAction<RouterState> | RegistrationAction;
