import { Reducer } from 'redux';

import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LoginAction, LoginState } from '../types';

const initialState: LoginState = {
    loading: false,
};

export const LoginReducer: Reducer<LoginState, LoginAction> = (state: LoginState = initialState, action: LoginAction) => {
    switch (action.type) {
        case LOGIN_LOADING: {
            return { ...state, loading: action.payload };
        }
        case LOGIN_ERROR: {
            return { ...state, error: action.payload };
        }
        case LOGIN_SUCCESS: {
            console.log('login Success');
            return { error: undefined, loading: false, user: action.payload };
        }
        default: {
            return state;
        }
    }
};
