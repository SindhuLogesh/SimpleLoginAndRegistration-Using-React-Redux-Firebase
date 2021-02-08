import { Reducer } from 'redux';

import { DashboardAction, DashboardState, DATA_LOADING, DATA_LOADING_FAIL, DATA_LOADING_SUCCESS } from '../types';

const initialState: DashboardState = {
    loading: false,
    userInfo: undefined,
};

export const DashboardReducer: Reducer<DashboardState, DashboardAction> = (state: DashboardState = initialState, action: DashboardAction) => {
    switch (action.type) {
        case DATA_LOADING: {
            return { ...state, loading: action.payload };
        }
        case DATA_LOADING_FAIL: {
            return { ...state, error: action.payload };
        }
        case DATA_LOADING_SUCCESS: {
            console.log('login Success');
            return { error: undefined, loading: false, userInfo: action.payload };
        }
        default: {
            return state;
        }
    }
};
