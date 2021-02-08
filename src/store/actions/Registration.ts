import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';
import { ThunkAction } from 'redux-thunk';

import { Login } from '../../pages/Login/Login';
import { login, setLoginError } from '../actions/Login';
import { history } from '../configureStore';
import { ApplicationState, REGISTRATION_ERROR, REGISTRATION_SUCCESS, RegistrationAction } from '../types';
import { UserInfo } from '../types/UserInfo';

const setRegistrationError = (value: string): ThunkAction<void, ApplicationState, null, RegistrationAction> => {
    return (dispatch) => {
        dispatch({
            type: REGISTRATION_ERROR,
            payload: value,
        });
    };
};

const setRegistationSuccess = (): ThunkAction<void, ApplicationState, null, RegistrationAction> => {
    return (dispatch) => {
        dispatch({
            type: REGISTRATION_SUCCESS,
        });
    };
};

export const registartion = (userDetail: UserInfo & { password: string }): ThunkAction<void, ApplicationState, null, RegistrationAction> => {
    return async (dispatch) => {
        try {
            const { password, ...userInfo } = userDetail;
            firebase
                .auth()
                .createUserWithEmailAndPassword(userDetail.email, userDetail.password)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    if (user) {
                        debugger;
                        await firebase.firestore().collection('UserDetails').doc(user.uid).set(userInfo);
                        dispatch(setRegistationSuccess());
                        dispatch(setLoginError(''));
                        history.push('/Login');
                    } else {
                        dispatch(setRegistrationError('Unknown error'));
                    }
                })
                .catch((err) => {
                    dispatch(setRegistrationError(err));
                });
        } catch (err) {
            dispatch({
                type: REGISTRATION_ERROR,
                payload: err.message,
            });
        }
    };
};
