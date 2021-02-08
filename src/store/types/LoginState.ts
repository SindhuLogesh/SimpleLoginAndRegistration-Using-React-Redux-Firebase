import firebase from 'firebase/app';

import { BaseState } from './BaseState';

export interface LoginState extends BaseState {
    user?: firebase.User;
}
