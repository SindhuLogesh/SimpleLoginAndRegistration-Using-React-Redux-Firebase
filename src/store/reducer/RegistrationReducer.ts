import 'firebase/auth';

import { Reducer } from 'redux';

import { REGISTRATION_ERROR, REGISTRATION_SUCCESS, RegistrationAction, RegistrationState, REGISTRING_DATA } from '../types';

const initialState: RegistrationState = {
    loading: false,
};

export const RegistrationReducer: Reducer<RegistrationState, RegistrationAction> = (state: RegistrationState = initialState, action: RegistrationAction) => {
    switch (action.type) {
        case REGISTRING_DATA: {
            return { ...state, loading: action.payload };
        }
        case REGISTRATION_SUCCESS: {
            console.log('successfully registered');
            return { error: undefined, loading: false };
        }
        case REGISTRATION_ERROR: {
            console.log('registration unsuccessful');
            return { loading: false, error: action.payload };
        }
        default: {
            return state;
        }
    }
};
