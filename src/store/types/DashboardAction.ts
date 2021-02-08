// https://redux.js.org/recipes/usage-with-typescript#type-checking-actions--action-creators
import { UserInfo } from './UserInfo';

export const DATA_LOADING = 'DATA_LOADING';
export const DATA_LOADING_FAIL = 'DATA_LOADING_FAIL';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';

interface DataLoadingAction {
    type: typeof DATA_LOADING;
    payload: boolean;
}

interface LoadingFailedAction {
    type: typeof DATA_LOADING_FAIL;
    payload: string;
}

interface SuccessAction {
    type: typeof DATA_LOADING_SUCCESS;
    payload: UserInfo;
}

export type DashboardAction = DataLoadingAction | LoadingFailedAction | SuccessAction;
