// https://redux.js.org/recipes/usage-with-typescript#type-checking-actions--action-creators
import firebase from 'firebase/app';

export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

interface LoginLodingAction {
    type: typeof LOGIN_LOADING;
    payload: boolean;
}

interface LoginErrorAction {
    type: typeof LOGIN_ERROR;
    payload: string;
}

interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: firebase.User;
}

export type LoginAction = LoginLodingAction | LoginErrorAction | LoginSuccessAction;
