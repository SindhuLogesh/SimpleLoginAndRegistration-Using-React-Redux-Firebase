import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';
import { ThunkAction } from 'redux-thunk';

import { ApplicationState, DashboardAction, DATA_LOADING, DATA_LOADING_FAIL, DATA_LOADING_SUCCESS } from '../types';
import { UserInfo } from '../types/UserInfo';

const setDataLoading = (value: boolean): ThunkAction<void, ApplicationState, null, DashboardAction> => {
    return (dispatch) => {
        dispatch({
            type: DATA_LOADING,
            payload: value,
        });
    };
};

const setDataLoadingError = (value: string): ThunkAction<void, ApplicationState, null, DashboardAction> => {
    return (dispatch) => {
        dispatch({
            type: DATA_LOADING_FAIL,
            payload: value,
        });
    };
};

const loadedSuccess = (user: UserInfo): DashboardAction => {
    return {
        type: DATA_LOADING_SUCCESS,
        payload: user,
    };
};

export const dashborad = (user: firebase.User): ThunkAction<void, ApplicationState, null, DashboardAction> => {
    return async (dispatch) => {
        try {
            dispatch(setDataLoading(true));
            const docRef = await firebase.firestore().collection('UserDetails').doc(user.uid);

            docRef
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        console.log('Document data:', doc.data());
                        dispatch(loadedSuccess(doc.data() as UserInfo));
                    } else {
                        // doc.data() will be undefined in this case
                        console.log('No such document!');
                    }
                })
                .catch((error) => {
                    console.log('Error getting document:', error);
                });
            // if (userData) {
            //     dispatch(loadedSuccess(userData));
            // } else {
            //     dispatch(setDataLoadingError('Unknown error!'));
            // }
        } catch (err) {
            dispatch(setDataLoadingError(err.message));
        } finally {
            dispatch(setDataLoading(false));
        }
    };
};
