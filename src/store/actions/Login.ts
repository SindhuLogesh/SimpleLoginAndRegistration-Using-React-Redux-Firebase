import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';
import { ThunkAction } from 'redux-thunk';

import { history } from '../../store/configureStore';
import { ApplicationState, LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LoginAction } from '../types';

const setLoginLoading = (value: boolean): ThunkAction<void, ApplicationState, null, LoginAction> => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_LOADING,
            payload: value,
        });
    };
};

export const setLoginError = (value: string): ThunkAction<void, ApplicationState, null, LoginAction> => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_ERROR,
            payload: value,
        });
    };
};

const loginSuccess = (user: firebase.User): LoginAction => {
    return {
        type: LOGIN_SUCCESS,
        payload: user,
    };
};

export const login = (username: string, password: string): ThunkAction<void, ApplicationState, null, LoginAction> => {
    return async (dispatch) => {
        try {
            dispatch(setLoginLoading(true));
            const userCredential = await firebase.auth().signInWithEmailAndPassword(username, password);
            if (userCredential.user) {
                dispatch(loginSuccess(userCredential.user));
                history.push('/Dashboard');
            } else {
                dispatch(setLoginError('Unknown error!'));
            }
        } catch (err) {
            dispatch(setLoginError(err.message));
        } finally {
            dispatch(setLoginLoading(false));
        }
    };
};
